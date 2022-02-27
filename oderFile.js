function orderFile(path, consoleHtml)
{
        
    const fs = require('fs');
    const pathToOrder = path;//Aquí va el directrorio que quieras ordenar
    const extensiones = [`.txt|.pdf|.docx|.pptx|.srt|.xlsx`,`.png|.jpg|.jpng|.gif|.ico|.jfif|.jpeg`,`.mp4|.mov`,`.mp3`, `.exe|.msi`, `.rar|.zip`] // estas son las extensiones son expresiones regulares
    fs.readdir(pathToOrder, (err, files)=>{
        files.forEach(archivo =>{
            extensiones.forEach(extension=>{
                console.log(buscar(extension, archivo));
                if(buscar(extension, archivo)) 
                {
                    if(extension == extensiones[0]) mover('documentos', archivo);
                    else if(extension == extensiones[1]) mover('images', archivo);
                    else if(extension == extensiones[2]) mover('videos', archivo);
                    else if(extension == extensiones[3]) mover('audios', archivo);
                    else if(extension == extensiones[4]) mover('programas', archivo);
                    else if(extension == extensiones[5]) mover('comprimidos', archivo);
                }
            })
        })
    })

    //Mueve el archivo a la carpeta que le pases por parametro
    // extra: si la carpeta no existe creara una y volvera a ejecutar la funcion una vez mas
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
            div.innerText ='>' + archivo + ' fue movido exitosamente';
            consoleHtml.appendChild(div);
        })
    }
    //devuelve verdadero o falso dependiendo si la extension del archivo coincide con la expresion 
    function buscar(expresion, archivo)
    {
        const exp = expresion;
        const er = new RegExp(exp);
        let isTheType =  er.test(archivo);
        console.log(expresion + ' is the type ' + isTheType);
        return isTheType;

    }
}

exports.orderFile=orderFile;