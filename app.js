const { app, BrowserWindow, ipcMain } = require('electron')
const ipc = require('electron').ipcMain;
let spawn = require("child_process").spawn;

const createWindow = () => {
    const win = new BrowserWindow({
      width: 998,
      height: 800,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation:false,
        webSecurity: false,
        nodeIntegrationInSubFrames:true,
        enableRemoteModule: true,
        nodeIntegrationInWorker: true
      },
    })
    // win.webContents.openDevTools()
    win.loadFile('index.html')
    win.show();
}

app.whenReady().then(() => {
    createWindow()
})

ipcMain.on('start', (event, arg) => {
    spawn("/Applications/VLC.app/Contents/MacOS/VLC", [
        arg, 
        "--fullscreen",
        "--no-video-title-show",
        "--video-on-top"
    ]);

});
