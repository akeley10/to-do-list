document.addEventListener('DOMContentLoaded',()=>{
    const formulario = document.getElementById('lista');
    const agregarBtn = document.getElementById('agregar');
    const eliminarBtn = document.getElementById('eliminar');
    const resultado = document.getElementById('resultadoLista');
    let arrayDatos = [];

    // recuperar cookie
    var cookie = document.cookie.split("; ").find(row => row.startsWith('resultado='));
    if(cookie){
        //Para acceder al valor de la cookie
        const cookieValue = cookie.split('=')[1];
        arrayDatos = JSON.parse(cookieValue);
        let resultadoHtml = "";
        for (let i = 0; i < arrayDatos.length; i++) {
            resultadoHtml += '<li>'+ arrayDatos[i] + '</li>'+'<br>';
            
        }
        resultado.innerHTML = resultadoHtml;
    }


    
    formulario.addEventListener("submit",(e=>{
       e.preventDefault();
       const valorList = document.getElementById('inputLista').value;
       arrayDatos.push(valorList);
       document.cookie = "resultado=" + JSON.stringify(arrayDatos) + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";
       let resultadoHtml= "";
       for (let i = 0; i < arrayDatos.length; i++) {
        resultadoHtml += '<li>'+ arrayDatos[i] + '</li>'+'<br>';
        
       }

       resultado.innerHTML = resultadoHtml;
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
           //Actualizando resultado de la cookie del array al borrar
           document.cookie = "resultado=" + JSON.stringify(arrayDatos) + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";
    });


});