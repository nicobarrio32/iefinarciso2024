"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    agregarEstudio(arg0) {
        throw new Error('Method not implemented.');
    }
    agregarExperiencia(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(dni, nombre, apellido, expectativas) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.expectativas = expectativas;
        this.habilidades = [];
        this.estudios = [];
        this.experiencias = [];
    }
    agregarHabilidad(habilidad) {
        this.habilidades.push(habilidad);
    }
}
exports.Persona = Persona;
