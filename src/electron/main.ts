import { BrowserWindow, app } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 800,
        minWidth: 1024,
        minHeight: 600,
        resizable: true,
        icon: path.join(path.resolve(), "/logo.svg"),
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL(`file://${path.resolve(__dirname, "../index.html")}`);
    mainWindow.webContents.openDevTools();

    mainWindow.webContents.on("did-finish-load", () => {
        mainWindow?.webContents.setZoomFactor(0.75);
    });
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
