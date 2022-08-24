const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;
function createWindow()
{
    win = new BrowserWindow({
        width:800,
        height: 600,
        icon: path.join(__dirname,'img','xd.jpg'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
          }
    });
    win.loadFile(path.join(__dirname, 'index.html'));
    // win.removeMenu();
    win.on('closed', ()=>{
        win = null;
    })
}

app.whenReady().then(() => {
    createWindow()
  });

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin') app.quit();
});

