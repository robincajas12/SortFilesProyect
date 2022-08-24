let warning = document.getElementById('warning');
let warningBanner = document.getElementById('warning-banner');
warning.addEventListener('click', ()=>{
    warningBanner.style.display = 'none';
})
let consoleHtml = document.getElementById('console');
let btnOrder = document.getElementById('btn-order');
let inputPath = document.getElementById('order-path');
btnOrder.addEventListener('click', ()=>{
    window.api.orderFile(inputPath.value);
});



// folderName: 'lmao', formats: ['.apk']