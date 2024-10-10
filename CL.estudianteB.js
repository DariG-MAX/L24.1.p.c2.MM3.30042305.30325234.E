export default class Estudiante {  
    constructor(nombre, acumuladoNotas, cantidadMaterias, edad) {  
        this.nombre = nombre;  
        this.acumuladoNotas = acumuladoNotas;  
        this.cantidadMaterias = cantidadMaterias;  
        this.edad = edad;  
    }  

    calcularPromedio() {  
        return this.acumuladoNotas / this.cantidadMaterias;  
    }  
}  