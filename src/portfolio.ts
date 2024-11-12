import { Persona } from './models';
import * as fs from 'fs';

export class Portfolio {
    private personas: Persona[] = [];

    agregarPersona(persona: Persona) {
        this.personas.push(persona);
    }

    listarPersonas() {
        return this.personas;
    }

    buscarPersona(dni: string): Persona | undefined {
        return this.personas.find(persona => persona.dni === dni);
    }

    borrarPersona(dni: string) {
        this.personas = this.personas.filter(persona => persona.dni !== dni);
    }

    exportarJSON(filePath: string) {
        const data = JSON.stringify(this.personas, null, 2);
        fs.writeFileSync(filePath, data);
        console.log(`Datos exportados a ${filePath}`);

    }
}