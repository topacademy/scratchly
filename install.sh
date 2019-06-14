if [ $(whoami) == 'root' ]; then
  echo "Please do not run me as root"
  exit 1
fi

SCRIPT_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

EXTRACT_PATH=$SCRIPT_PATH

APP_PATH=$EXTRACT_PATH/app

INSTALL_PATH=/opt/edublocks
GLOBAL_BIN_PATH=/usr/local/bin

sudo mkdir -p $INSTALL_PATH

sudo cp -r $APP_PATH/* $INSTALL_PATH

echo "Copying the desktop shortcut to your desktop... \n"
cp $APP_PATH/edublocks.desktop ~/Desktop

echo "Copying the icon...\n"
sudo cp $APP_PATH/ui/images/logo.png /usr/share/icons/hicolor/scalable/apps/logo.png

echo "Making the program visible in the menu...\n"
sudo cp $APP_PATH/edublocks.desktop /usr/share/applications

echo "Creating symlinks... \n"

sudo rm -f $GLOBAL_BIN_PATH/edublocks
sudo rm -f $GLOBAL_BIN_PATH/edublocks-headless
sudo rm -f $GLOBAL_BIN_PATH/edublocks-startup-enable
sudo rm -f $GLOBAL_BIN_PATH/edublocks-startup-disable
sudo rm -f $GLOBAL_BIN_PATH/edublocks-uninstall

sudo ln -s $INSTALL_PATH/scripts/start.sh           $GLOBAL_BIN_PATH/edublocks
sudo ln -s $INSTALL_PATH/server/start.sh            $GLOBAL_BIN_PATH/edublocks-headless
sudo ln -s $INSTALL_PATH/server/startup-enable.sh   $GLOBAL_BIN_PATH/edublocks-startup-enable
sudo ln -s $INSTALL_PATH/server/startup-disable.sh  $GLOBAL_BIN_PATH/edublocks-startup-disable
sudo ln -s $INSTALL_PATH/scripts/uninstall.sh       $GLOBAL_BIN_PATH/edublocks-uninstall
