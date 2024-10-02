class Persona {
    private edad: number;
    direccion: Direccion;
    vehiculos: Vehiculo[];

    constructor(public nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[] = []) {
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculos = vehiculos;
    }

    saludar() {
        console.log(`Persona: Tu nombre es ${this.nombre}, tienes ${this.edad} años y vives en ${this.direccion.ciudad}`);
    }
}

const coche = new Coche();
const personaConCoche = new Persona('Luna', 35, { calle: '48d Nro 102b-75', ciudad: 'medellin', pais: 'colombia' }, [coche]);
