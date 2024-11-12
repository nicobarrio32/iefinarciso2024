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

    agregarEstudio(estudio: IEstudio): void {
        this.estudios.push(estudio);
    }

    agregarExperiencia(experiencia: IExperiencia): void {
        this.experiencias.push(experiencia);
    }

    agregarHabilidad(habilidad: IHabilidad): void {
        this.habilidades.push(habilidad);
    }

    obtenerDatos(): string {
        return JSON.stringify(this, null, 2);
    }
}
