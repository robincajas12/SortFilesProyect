const { contextBridge } = require('electron');
const {addPath} = require('./crudPaths');
const crudPaths = require('./crudPaths');
const {orderFile} = require('./oderFile');
// const {configSortFilesDB} = require('./database/realm');

contextBridge.exposeInMainWorld('api', {
    orderFile: orderFile,
    crudPaths: crudPaths
})