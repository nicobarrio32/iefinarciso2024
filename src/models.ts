import { IPersona, IHabilidad, IEstudio, IExperiencia } from './interfaces';

export class Persona implements IPersona {
    public habilidades: IHabilidad[] = [];
    public estudios: IEstudio[] = [];
    public experiencias: IExperiencia[] = [];

    constructor(
        public dni: string,
        public nombre: string,
        public apellido: string,
        public expectativas?: string,
    ) {}

    // CRUD para habilidades
    agregarHabilidad(habilidad: IHabilidad): void {
        this.habilidades.push(habilidad);
    }

    obtenerHabilidades(): IHabilidad[] {
        return this.habilidades;
    }

    actualizarHabilidad(index: number, habilidad: IHabilidad): void {
        if (this.habilidades[index]) {
            this.habilidades[index] = habilidad;
        } else {
            throw new Error("Habilidad no encontrada");
        }
    }

    eliminarHabilidad(index: number): void {
        if (this.habilidades[index]) {
            this.habilidades.splice(index, 1);
        } else {
            throw new Error("Habilidad no encontrada");
        }
    }

    // CRUD para estudios
    agregarEstudio(estudio: IEstudio): void {
        this.estudios.push(estudio);
    }

    obtenerEstudios(): IEstudio[] {
        return this.estudios;
    }

    actualizarEstudio(index: number, estudio: IEstudio): void {
        if (this.estudios[index]) {
            this.estudios[index] = estudio;
        } else {
            throw new Error("Estudio no encontrado");
        }
    }

    eliminarEstudio(index: number): void {
        if (this.estudios[index]) {
            this.estudios.splice(index, 1);
        } else {
            throw new Error("Estudio no encontrado");
        }
    }

    // CRUD para experiencias
    agregarExperiencia(experiencia: IExperiencia): void {
        this.experiencias.push(experiencia);
    }

    obtenerExperiencias(): IExperiencia[] {
        return this.experiencias;
    }

    actualizarExperiencia(index: number, experiencia: IExperiencia): void {
        if (this.experiencias[index]) {
            this.experiencias[index] = experiencia;
        } else {
            throw new Error("Experiencia no encontrada");
        }
    }

    eliminarExperiencia(index: number): void {
        if (this.experiencias[index]) {
            this.experiencias.splice(index, 1);
        } else {
            throw new Error("Experiencia no encontrada");
        }
    }

    // Métodos adicionales (ej. lectura general)
    obtenerDatos(): string {
        return JSON.stringify({
            dni: this.dni,
            nombre: this.nombre,
            apellido: this.apellido,
            expectativas: this.expectativas,
            habilidades: this.habilidades,
            estudios: this.estudios,
            experiencias: this.experiencias,
        }, null, 2);
    }
}
