const Realm = require('realm');
async function configSortFilesDB()
{
    const ConfigPaths = {
            name: "ConfigPaths",
            properties: {
                folderName: "string",
                formats: {
                    type: "list",
                    objectType: "string"
                }
            }
        };
        const realm = await Realm.open({
            schema: [ConfigPaths],
            inMemory: true
        });
        realm.write(()=>{
            nuevoPath = realm.create('ConfigPaths', {
                folderName: 'Images',
                formats: ['.png', '.jpg']
            })
            nuevoPath2 = realm.create('ConfigPaths', {
                folderName: 'Videos',
                formats: ['.mp4', '.jpg']
            })
            nuevoPath3 = realm.create('ConfigPaths', {
                folderName: 'programas',
                formats: ['.exe']
            })
        })

    return new Promise((resolve, reject)=>{
        resolve(realm);
    });
}



exports.configSortFilesDB = configSortFilesDB;
