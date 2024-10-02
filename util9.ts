import { Persona } from './Persona';

const jsonToPersona = (objetoJson: any): Persona => {
    return new Persona(objetoJson.nombre, objetoJson.edad, objetoJson.direccion);
};


const crearYTransformar = () => {
    const json = {
        nombre: 'Luis',
        edad: 29,
        direccion: { calle: 'Principal', ciudad: 'Madrid', pais: 'España' }
    };
    const persona = jsonToPersona(json);
    persona.saludar();
};

crearYTransformar();
