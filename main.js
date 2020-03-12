const { app, Menu, dialog, Tray} = require('electron')
const path = require('path')

let win

app.on('ready', () => {
    const tray = new Tray(path.join(__dirname, 'icon.png'))
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Open File', click: onclick = () => {
            dialog.showOpenDialogSync(contextMenu, {
                properties: ['openFile'],
                filters: ['*']
            })           
        } },
        { label: 'Item2', submenu: [
            { label: 'Item', type: 'normal' },
            { label: 'Item 2', type: 'checkbox' }
        ]}
      ])
    
    tray.setContextMenu(contextMenu)
    tray.setToolTip('App Electron')
    
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})