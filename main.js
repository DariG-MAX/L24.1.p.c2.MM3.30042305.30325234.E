document.getElementById('formulario').addEventListener('submit', function(e) {  
    e.preventDefault();  

    const nombre = document.getElementById('nombre').value;  
    const acumuladoNotas = parseFloat(document.getElementById('acumuladoNotas').value);  
    const cantidadMaterias = parseInt(document.getElementById('cantidadMaterias').value);  
    const deporte = parseInt(document.getElementById('deporte').value);  
    const edad = parseInt(document.getElementById('edad').value);  

    const deportista = new Deportista(nombre, acumuladoNotas, cantidadMaterias, edad, deporte);  
    const resultado = deportista.reporteAdmisión();  
    
    document.getElementById('resultado').textContent = resultado;  
});  