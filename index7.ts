const empleados: Empleado[] = [

    new Empleado('Carlos', 40, 5000),
    new Empleado('Laura', 32, 4500),
    new Empleado('Camila', 32, 4500),
    new Empleado('Santiago', 32, 4500),
    new Empleado('Joycel', 32, 4500),
    new Empleado('Alejandro', 32, 4500),
    new Empleado('Karina', 32, 4500),
    new Empleado('Camilo', 32, 4500),
    new Empleado('Gabriela', 32, 4500),
    new Empleado('Angel', 32, 4500),
];

empleados.forEach(empleado => empleado.saludar());
