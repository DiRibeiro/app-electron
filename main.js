const { app, Menu, Tray} = require('electron')
const path = require('path')

let win
app.on('ready', () => {
    const tray = new Tray(path.join(__dirname, 'icon.png'))
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item', type: 'normal' },
        { label: 'Item2', submenu: [
            { label: 'Item', type: 'normal' },
            { label: 'Item 2', type: 'checkbox' }
        ]}
      ])
      // Call this again for Linux because we modified the context menu
      tray.setContextMenu(contextMenu)
      tray.setToolTip('Jogue Limpo com Osório')
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {

    }
})