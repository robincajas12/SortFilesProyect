function orderFile(path, consoleHtml)
{
    const fs = require('fs');
    const configSortFiles = require('./configSortFile.json');
    const pathToOrder = path//Aquí va el directrorio que quieras ordenar
    // const extensiones = [`.txt|.pdf|.docx|.pptx|.srt|.xlsx`,`.png|.jpg|.jpng|.gif|.ico|.jfif|.jpeg`,`.mp4|.mov`,`.mp3`, `.exe|.msi`, `.rar|.zip`] // estas son las extensiones son expresiones regulares
    fs.readdir(pathToOrder, (err, files)=>{ 
        const dataFolders = concatAllOfTheExt();
        console.log(dataFolders);
        files.forEach(archivo =>{
            dataFolders.filter(dataFolder=>{
                if(buscar(dataFolder.expresion, archivo))
                {
                    mover(dataFolder.folderName, archivo);
                }
                });
            });
        });


//Convierte las extensiones del json en expresiones regulares
    function concatAllOfTheExt()
    {
        let arryExtensiones = [];
        configSortFile.sortFiles.allowedFormats.forEach(objFormat=>{
            let exp = "";
            objFormat.formats.forEach(format=>{
                exp += format + '|';
            })
            arryExtensiones.push(
                {
                    expresion:exp.substring(0, exp.length - 1),
                    folderName: objFormat.folderName
                });
            exp = "";
        });
        return arryExtensiones;
    }
    //Mueve el archivo a la carpeta que le pases por parametro
    // extra: si la carpeta no existe creara una y volvera a ejecutar la funcion una vez mas

    const configSortFile = require('./configSortFile.json');
    function mover(carpeta, archivo)
    {
        const oldPath = pathToOrder + '/' + archivo;
        const newPath = pathToOrder + `/${carpeta}/` + archivo;
        fs.rename(oldPath, newPath, (err)=>{
            if(err) {
                fs.mkdirSync(`${pathToOrder}/${carpeta}`,{recursive:true});
                mover(carpeta,archivo);
            }
            const div = document.createElement('div');
            div.innerText ='>' + archivo + ' fue movido exitosamente a la carpeta ' + carpeta;
            consoleHtml.appendChild(div);
        })
    }
    //devuelve verdadero o falso dependiendo si la extension del archivo coincide con la expresion 
    function buscar(expresion, archivo)
    {
        const exp = expresion;
        const er = new RegExp(exp);
        let isTheType =  er.test(archivo);
        console.log(expresion + ' is the type ' + archivo +' = ' + isTheType);
        return isTheType;

    }
        
}

exports.orderFile=orderFile;