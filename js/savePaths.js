const btnAddPath = document.getElementById('btn-add-path');
const inputAddPath = document.getElementById('input-add-path');
const namePath = document.getElementById('name-path');
const cancelarBtnAddPath = document.getElementById('cancelar-btn-add-path');
const saveChangesAddPath = document.getElementById('save-changes-add-path');
const crudPaths = require('./crudPaths');
console.log(crudPaths);
btnAddPath.addEventListener('click', ()=>{
    inputAddPath.style.display = 'flex';
});

cancelarBtnAddPath.addEventListener('click', ()=>{
    inputAddPath.style.display ='none';
})

saveChangesAddPath.addEventListener('click', ()=>{
    crudPaths.addPath(namePath.value, inputPath.value);
    if(crudPaths.saveChanges()) console.log('guardado con exito');
    inputAddPath.style.display = 'none';
});

