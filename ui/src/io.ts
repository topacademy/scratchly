import fileSaver = require('file-saver');

function getIo() {
  return getWebIo();
}

function getWebIo() {
  function openFile() {
    return new Promise<string>((resolve, reject) => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".xml";
      fileInput.addEventListener("change", readSingleFile, false);
      fileInput.click();

      function readSingleFile(e: Event) {
        const file = (e.target as any).files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
          const contents = (e.target as any).result;
          resolve(contents);
        };

        reader.onerror = (err) => {
          reject(new Error(err.message));
        };

        reader.readAsText(file);
      }
    });
  }

  /**
   * Save a file to the user's computer
   * @param text Data to save
   * @param ext Suggested file name extension, i.e. 'xml'
   */
  function saveFile(text: string, ext: string | null = null) {
    let fileName = prompt('Enter filename...');

    if (!fileName) return Promise.resolve(void 0);

    if (ext && fileName.slice(-4) !== `.${ext}`) fileName = `${fileName}.${ext}`;

    const blob = new Blob([text], { type: 'text/xml;charset=utf-8' });
    fileSaver.saveAs(blob, fileName);
    return Promise.resolve(void 0);
  }

  return {
    openFile,
    saveFile,
  };
}

export {
  getIo,
}
