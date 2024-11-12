"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const portfolio_1 = require("./portfolio");
const portfolio = new portfolio_1.Portfolio();
// Crear y agregar una persona
const persona = new models_1.Persona('12345678', 'Juan', 'Pérez', 'Crecimiento profesional');
persona.agregarHabilidad({ nombre: 'JavaScript', nivel: 8 });
persona.agregarEstudio({ institucion: 'Universidad X', titulo: 'Ingeniería', añoFinalizacion: 2020 });
persona.agregarExperiencia({ empresa: 'Empresa Y', puesto: 'Desarrollador', años: 2 });
portfolio.agregarPersona(persona);
// Listar personas
console.log('Lista de personas:', portfolio.listarPersonas());
// Buscar persona por DNI
const encontrada = portfolio.buscarPersona('12345678');
console.log('Persona encontrada:', encontrada);
// Borrar persona
portfolio.borrarPersona('12345678');
console.log('Persona después de borrar:', portfolio.listarPersonas());
// Exportar datos a JSON
portfolio.exportarJSON('./personas.json');
