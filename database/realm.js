const Realm = require('realm');
//async function crud (pathConfig){
    // const ConfigPaths = {
    // name: "ConfigPaths",
    // properties: {
    //     folderName: "string",
    //     formats: {
    //         type: "list",
    //         objectType: "string"
    //     }
    // },
    // };
    // // open a local realm with the 'Cat' schema
    // const realm = await Realm.open({
    //     schema: [ConfigPaths],
    //     inMemory: true
    // });
    // realm.write(()=>{
    //     newEntry = realm.create('ConfigPaths', pathConfig)
    // })
    // console.log(realm.objects('ConfigPaths')[0].formats[0]);
//}

// const crud = new Promise((resolve, reject)=>{
    // const ConfigPaths = {
    //     name: "ConfigPaths",
    //     properties: {
    //         folderName: "string",
    //         formats: {
    //             type: "list",
    //             objectType: "string"
    //         }
    //     },
    //     };
    //     // open a local realm with the 'Cat' schema
    //     async function open(callback){
    //         const realm = await Realm.open({
    //             schema: [ConfigPaths],
    //             inMemory: true
    //         });
    //     }
// });

async function configSortFilesDB()
{
    const ConfigPaths = {
            name: "ConfigPaths",
            properties: {
                folderName: "string",
                allowedFormats: {
                    type: "list",
                    objectType: "string"
                }
            }
        };
        const realm = await Realm.open({
            schema: [ConfigPaths],
            inMemory: true
        });

    return new Promise((resolve, reject)=>{
        resolve(realm);
    });
}



exports.configSortFilesDB = configSortFilesDB;
