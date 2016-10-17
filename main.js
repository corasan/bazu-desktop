const {app, BrowserWindow} = require('electron')

const port = process.env.PORT || 3000;
let win;

function createWindow() {
  win = new BrowserWindow({width: 860, height: 620});

  win.loadURL(`http://localhost:${port}/`);

  win.webContents.openDevTools();

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
