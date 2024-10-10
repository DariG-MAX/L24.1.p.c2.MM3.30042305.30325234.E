import CL_estudianteB from "./CL.estudianteB"
export default class Deportista extends Estudiante {  
    constructor(nombre, acumuladoNotas, cantidadMaterias, edad, deporte) {  
        super(nombre, acumuladoNotas, cantidadMaterias, edad);  
        this.deporte = deporte; // 1=beisbol, 2=fútbol  
    }  

    esAdmitido() {  
        const promedio = parseFloat(this.calcularPromedio());  
        if (this.deporte === 1) {  
            return promedio > 14 && this.edad > 21; // Condición para beisbol  
        } else if (this.deporte === 2) {  
            return this.edad >= 19 && promedio >= 12; // Condición para fútbol  
        }  
        return false;  
    }  

    reporteAdmisión() {  
        return `${this.nombre} ${this.esAdmitido() ? 'es admitido' : 'no es admitido'} en ${this.deporte === 1 ? 'beisbol' : 'fútbol'}.   
        Nota promedio: ${this.calcularPromedio()}`;  
    }  
}  