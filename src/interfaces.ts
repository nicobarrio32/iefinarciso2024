export interface IPersona {
    dni: string;
    nombre: string;
    apellido: string;
    expectativas?: string;
}

export interface IHabilidad {
    habilidad: string;
    nivel: string; // Rango de 1 a 10
}

export interface IEstudio {
    institucion: string;
    titulo: string;
    añoFinalizacion: number;
}

export interface IExperiencia {
    empresa: string;
    puesto: string;
    años: number;
}
