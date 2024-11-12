import { PersonaCRUD } from './PersonaCRUD';
import { IHabilidad, IEstudio, IExperiencia } from './interfaces';
import * as readlineSync from 'readline-sync'; // Importamos readline-sync para manejar entradas de usuario

const crud = new PersonaCRUD();

function mostrarMenu(): void {
    console.log('--- MENÚ CRUD PARA PERSONA ---');
    console.log('1. Crear Persona');
    console.log('2. Leer Persona');
    console.log('3. Actualizar Persona');
    console.log('4. Eliminar Persona');
    console.log('5. Agregar Estudio a Persona');
    console.log('6. Agregar Experiencia a Persona');
    console.log('7. Agregar Habilidad a Persona');
    console.log('8. Salir');
}

function crearPersona(): void {
    const dni = readlineSync.question('Ingrese el DNI de la persona: ');
    const nombre = readlineSync.question('Ingrese el nombre de la persona: ');
    const apellido = readlineSync.question('Ingrese el apellido de la persona: ');
    const expectativas = readlineSync.question('Ingrese las expectativas de la persona (opcional): ');

    crud.crearPersona(dni, nombre, apellido, expectativas || undefined);
}

function leerPersona(): void {
    const dni = readlineSync.question('Ingrese el DNI de la persona: ');
    crud.leerPersona(dni);
}

function actualizarPersona(): void {
    const dni = readlineSync.question('Ingrese el DNI de la persona: ');
    const nombre = readlineSync.question('Ingrese el nuevo nombre (opcional): ');
    const apellido = readlineSync.question('Ingrese el nuevo apellido (opcional): ');
    const expectativas = readlineSync.question('Ingrese las nuevas expectativas (opcional): ');

    crud.actualizarPersona(dni, nombre || undefined, apellido || undefined, expectativas || undefined);
}

function eliminarPersona(): void {
    const dni = readlineSync.question('Ingrese el DNI de la persona a eliminar: ');
    crud.eliminarPersona(dni);
}

function agregarEstudio(): void {
    const dni = readlineSync.question('Ingrese el DNI de la persona: ');
    const institucion = readlineSync.question('Ingrese la institución: ');
    const titulo = readlineSync.question('Ingrese el título: ');
    const añoFinalizacion = readlineSync.question('Ingrese el año de finalización: ');

    const estudio: IEstudio = { institucion, titulo, añoFinalizacion: parseInt(añoFinalizacion) };
    crud.agregarEstudioAPersona(dni, estudio);
}

function agregarExperiencia(): void {
    const dni = readlineSync.question('Ingrese el DNI de la persona: ');
    const empresa = readlineSync.question('Ingrese la empresa: ');
    const puesto = readlineSync.question('Ingrese el puesto: ');
    const años = readlineSync.question('Ingrese los años de experiencia: ');

    const experiencia: IExperiencia = { empresa, puesto, años: parseInt(años) };
    crud.agregarExperienciaAPersona(dni, experiencia);
}

function agregarHabilidad(): void {
    const dni = readlineSync.question('Ingrese el DNI de la persona: ');
    const habilidad = readlineSync.question('Ingrese la habilidad: ');
    const nivel = readlineSync.question('Ingrese el nivel de habilidad: ');

    const habilidadObj: IHabilidad = { habilidad, nivel };
    crud.agregarHabilidadAPersona(dni, habilidadObj);
}

function ejecutarMenu(): void {
    let opcion = '';
    while (opcion !== '8') {
        mostrarMenu();
        opcion = readlineSync.question('Seleccione una opción: ');

        switch (opcion) {
            case '1':
                crearPersona();
                break;
            case '2':
                leerPersona();
                break;
            case '3':
                actualizarPersona();
                break;
            case '4':
                eliminarPersona();
                break;
            case '5':
                agregarEstudio();
                break;
            case '6':
                agregarExperiencia();
                break;
            case '7':
                agregarHabilidad();
                break;
            case '8':
                console.log('¡Hasta luego!');
                break;
            default:
                console.log('Opción inválida, por favor seleccione una opción válida.');
        }
    }
}

ejecutarMenu();
