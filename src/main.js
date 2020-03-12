const { app, Tray } = require('electron')
const path = require('path')

const tray = null
const assetsDirectory = path.join(__dirname, "..", "assets")

app.on('ready', () => {
    tray = new Tray(path.join(assetsDirectory, 'vs.png'))
    const contextMenu = Menu.buildfromTemplate([
        click: () => {
        const result = dialog.showOpenDialog({ properties: ['openDirectory'] })
    ])

    tray.setToolTip('Minha aplicação')
    tray.setContextMenu(contextMenu)
})