document.addEventListener('DOMContentLoaded',()=>{
    const formulario = document.getElementById('lista');
    const agregarBtn = document.getElementById('agregar');
    const eliminarBtn = document.getElementById('eliminar');
    const resultado = document.getElementById('resultadoLista');
    const arrayDatos = [];


    formulario.addEventListener("submit",(e=>{
       e.preventDefault();
       const valorList = document.getElementById('inputLista').value;
       arrayDatos.push(valorList);
       let resultadoHtml= "";
       for (let i = 0; i < arrayDatos.length; i++) {
        resultadoHtml += '<li>'+ arrayDatos[i] + '</li>'+'<br>';
        
       }
       resultado.innerHTML = resultadoHtml;

    }));

    eliminarBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        arrayDatos.pop();
        let resultadoHtml= "";
        for (let i = 0; i < arrayDatos.length; i++) {
            resultadoHtml += '<li>'+ arrayDatos[i] + '</li>'+'<br>';
            
           }
           resultado.innerHTML = resultadoHtml;
    });


});