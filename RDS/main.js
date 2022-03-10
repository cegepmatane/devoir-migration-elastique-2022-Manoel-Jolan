const { app, BrowserWindow} = require('electron')
const path = require('path')
const {Menu} = require('electron');

function createWindow () {
  // Pas de menu
  // https://stackoverflow.com/a/66062765
  Menu.setApplicationMenu(null);

  const win = new BrowserWindow({
      show: false,
      // Icône dans barre de titre et barre de tâche
      // https://stackoverflow.com/a/65352577
      icon: __dirname + '/decoration/illustration/logo-anime.png',
      webPreferences: { /*
      preload: path.join(__dirname, 'preload.js')
      */
    }
  })

  win.loadFile('index.html');

  // Affiche maximisé par défaut
  // https://stackoverflow.com/a/45906784
  win.maximize();
  win.show();
  win.webContents.openDevTools();

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
