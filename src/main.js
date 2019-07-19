const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let mainWindow;

// Listen for app to be ready
app.on("ready", function() {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL("http://localhost:3000/");
});

// Quit app when closed
app.on("closed", function() {
  app.quit();
});
