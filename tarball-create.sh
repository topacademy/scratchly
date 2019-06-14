#!/bin/bash

NODE_VERSION_WANTED="v6.12.3"

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

TMP_PATH=/tmp

ARCH=$1

if [ "$ARCH" == 'armv6l' ]; then
  echo 'Targeting ARM Architecture'
elif [ "$ARCH" == 'x64' ]; then
  echo 'Targeting x86-64 Architecture'
else
  echo "Invalid architecture $ARCH"
  exit 1
fi

echo ''
echo 'Downloading dependencies'
echo '========================'

echo ''
echo 'Downloading / Extracting Node.JS...'
curl https://nodejs.org/dist/$NODE_VERSION_WANTED/node-$NODE_VERSION_WANTED-linux-$ARCH.tar.xz | tar -xJ -C $TMP_PATH

NODE_TMP_PATH=$TMP_PATH/node-$NODE_VERSION_WANTED-linux-$ARCH

REPO_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $REPO_PATH

NODE_VERSION=$(node -v)

if [ "$NODE_VERSION" != "$NODE_VERSION_WANTED" ]; then
  echo "NodeJS has invalid version! ($NODE_VERSION)"
  echo "Please switch to $NODE_VERSION_WANTED using nvm or similar tool, i.e. nvm use $NODE_VERSION_WANTED"
  exit 1
fi

YARN_VERSION=$(yarn --version)

if [ $? -ne 0 ]; then
  echo 'Yarn has not been installed!'
  echo 'Please install yarn with: npm --global install yarn'
  exit 1
fi

BUNDLE_NAME="edublocks"

BUNDLE_PATH=$REPO_PATH/$BUNDLE_NAME

mkdir -p $BUNDLE_PATH
rm -rf $BUNDLE_PATH/*
rm -f $BUNDLE_PATH.tar.xz

APP_PATH=$BUNDLE_PATH/app

mkdir -p $APP_PATH

echo ''
echo 'Building EduBlocks general'
echo '=========================='

echo ''
echo 'Copying general files...'

cp $REPO_PATH/install-deps.sh     $BUNDLE_PATH
cp $REPO_PATH/install.sh          $BUNDLE_PATH

cp $REPO_PATH/edublocks.desktop   $APP_PATH

cp -r $REPO_PATH/script-includes  $APP_PATH
cp -r $REPO_PATH/scripts          $APP_PATH

mkdir -p                          $APP_PATH/bin
cp $NODE_TMP_PATH/bin/node        $APP_PATH/bin

echo ''
echo 'Building EduBlocks server'
echo '========================='

cd $REPO_PATH/server

echo ''
echo 'Installing dev dependencies...'
yarn install

echo ''
echo 'Compiling...'
yarn run build

echo ''
echo 'Copying...'
mkdir -p $APP_PATH/server

cp -r $REPO_PATH/server/build     $APP_PATH/server

cp $REPO_PATH/server/package.json $APP_PATH/server
cp $REPO_PATH/server/yarn.lock    $APP_PATH/server
cp $REPO_PATH/server/*.sh         $APP_PATH/server
cp $REPO_PATH/server/*.service    $APP_PATH/server

cd $APP_PATH/server

echo ''
echo 'Installing production dependencies...'
yarn install --production

# "node-pty" is a native code module so we must cross compile it individually targeting the ARM architecture
# $REPO_PATH/node-gyp-arm.sh $APP_PATH/server/node_modules/node-pty

# Copy the pre-compiled binary of "node-pty" so that it will work on the "arm6l".
tar -zxvf $REPO_PATH/assets/node-pty.tar.gz -C $APP_PATH/server/node_modules/node-pty/

echo ''
echo 'Building EduBlocks client'
echo '========================='

cd $REPO_PATH/ui

echo ''
echo 'Installing dev dependencies...'
yarn install

echo ''
echo 'Compiling...'
yarn run build

echo ''
echo 'Copying...'
mkdir -p $APP_PATH/ui
mkdir -p $APP_PATH/ui/node_modules/picnic

cp $REPO_PATH/ui/package.json $APP_PATH/ui
cp $REPO_PATH/ui/index.html   $APP_PATH/ui
cp $REPO_PATH/ui/start.sh     $APP_PATH/ui

cp -r $REPO_PATH/ui/dist      $APP_PATH/ui
cp -r $REPO_PATH/ui/lib       $APP_PATH/ui
cp -r $REPO_PATH/ui/blockly   $APP_PATH/ui
cp -r $REPO_PATH/ui/images    $APP_PATH/ui
cp -r $REPO_PATH/ui/css       $APP_PATH/ui
cp -r $REPO_PATH/ui/fonts     $APP_PATH/ui
cp -r $REPO_PATH/ui/node_modules/picnic/picnic.min.css $APP_PATH/ui/node_modules/picnic

cd $REPO_PATH

echo ''
echo 'Creating distributable'
echo '======================'

echo ''
echo 'Compressing...'
tar -cJf $BUNDLE_NAME-$ARCH.tar.xz $BUNDLE_NAME

echo ''
echo "==== EduBlock distributable created successfully ($BUNDLE_NAME.tar.xz)"
echo ''
