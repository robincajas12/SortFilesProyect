const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;
function createWindow()
{
    win = new BrowserWindow({
        width:800,
        height: 600,
        icon: path.join(__dirname,'img','icon.jpg'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
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

