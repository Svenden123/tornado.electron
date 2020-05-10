const {app, BrowserWindow} = require('electron');
const url = require('url');

function boot() {
    win = new BrowserWindow()
    win.loadUrl(url, format({
        pathname:'index.py',
        slashes: true
    }))
}

app.on('ready', boot)