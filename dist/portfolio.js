"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
const fs = require("fs");
class Portfolio {
    constructor() {
        this.personas = [];
    }
    agregarPersona(persona) {
        this.personas.push(persona);
    }
    listarPersonas() {
        return this.personas;
    }
    buscarPersona(dni) {
        return this.personas.find(persona => persona.dni === dni);
    }
    borrarPersona(dni) {
        this.personas = this.personas.filter(persona => persona.dni !== dni);
    }
    exportarJSON(filePath) {
        const data = JSON.stringify(this.personas, null, 2);
        fs.writeFileSync(filePath, data);
        console.log(`Datos exportados a ${filePath}`);
    }
}
exports.Portfolio = Portfolio;
