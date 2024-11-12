import { Persona } from './Persona';
import { IHabilidad, IEstudio, IExperiencia } from './interfaces';

export class PersonaCRUD {
    private personas: Persona[] = [];

    crearPersona(dni: string, nombre: string, apellido: string, expectativas?: string): void {
        const persona = new Persona(dni, nombre, apellido, expectativas);
        this.personas.push(persona);
        console.log(`Persona con DNI ${dni} creada.`);
    }

    leerPersona(dni: string): void {
        const persona = this.personas.find(p => p.dni === dni);
        if (persona) {
            console.log("Datos de la persona:");
            console.log(persona.obtenerDatos());
        } else {
            console.log(`Persona con DNI ${dni} no encontrada.`);
        }
    }

    actualizarPersona(dni: string, nombre?: string, apellido?: string, expectativas?: string): void {
        const persona = this.personas.find(p => p.dni === dni);
        if (persona) {
            if (nombre) persona.nombre = nombre;
            if (apellido) persona.apellido = apellido;
            if (expectativas) persona.expectativas = expectativas;
            console.log(`Persona con DNI ${dni} actualizada.`);
        } else {
            console.log(`Persona con DNI ${dni} no encontrada.`);
        }
    }

    eliminarPersona(dni: string): void {
        const index = this.personas.findIndex(p => p.dni === dni);
        if (index !== -1) {
            this.personas.splice(index, 1);
            console.log(`Persona con DNI ${dni} eliminada.`);
        } else {
            console.log(`Persona con DNI ${dni} no encontrada.`);
        }
    }

    agregarEstudioAPersona(dni: string, estudio: IEstudio): void {
        const persona = this.personas.find(p => p.dni === dni);
        if (persona) {
            persona.agregarEstudio(estudio);
            console.log(`Estudio agregado a persona con DNI ${dni}.`);
        } else {
            console.log(`Persona con DNI ${dni} no encontrada.`);
        }
    }

    agregarExperienciaAPersona(dni: string, experiencia: IExperiencia): void {
        const persona = this.personas.find(p => p.dni === dni);
        if (persona) {
            persona.agregarExperiencia(experiencia);
            console.log(`Experiencia agregada a persona con DNI ${dni}.`);
        } else {
            console.log(`Persona con DNI ${dni} no encontrada.`);
        }
    }

    agregarHabilidadAPersona(dni: string, habilidad: IHabilidad): void {
        const persona = this.personas.find(p => p.dni === dni);
        if (persona) {
            persona.agregarHabilidad(habilidad);
            console.log(`Habilidad agregada a persona con DNI ${dni}.`);
        } else {
            console.log(`Persona con DNI ${dni} no encontrada.`);
        }
    }
}
