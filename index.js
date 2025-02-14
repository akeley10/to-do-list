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
       document.cookie = "resultado=" + JSON.stringify(arrayDatos) +";"+ "expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";
       let resultadoHtml= "";
       for (let i = 0; i < arrayDatos.length; i++) {
        resultadoHtml += '<li>'+ arrayDatos[i] + '</li>'+'<br>';
        
       }

       resultado.innerHTML = resultadoHtml;
       console.log( document.cookie );
       formulario.reset();

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