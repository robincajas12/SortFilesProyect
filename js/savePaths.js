const btnAddPath = document.getElementById('btn-add-path');
const inputAddPath = document.getElementById('input-add-path');
const namePath = document.getElementById('name-path');
const cancelarBtnAddPath = document.getElementById('cancelar-btn-add-path');
const saveChangesAddPath = document.getElementById('save-changes-add-path');
btnAddPath.addEventListener('click', ()=>{
    inputAddPath.style.display = 'flex';
});

cancelarBtnAddPath.addEventListener('click', ()=>{
    inputAddPath.style.display ='none';
})

saveChangesAddPath.addEventListener('click', ()=>{
    window.api.crudPaths.addPath(namePath.value, inputPath.value);
    if(window.api.crudPaths.saveChanges()) console.log('guardado con exito');
    inputAddPath.style.display = 'none';
});

