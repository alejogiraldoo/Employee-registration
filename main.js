// JS document
// Document Elements
const txtLegajo = document.getElementById("legajo");
const txtNombre = document.getElementById("nombre");
const txtApellido = document.getElementById("apellido");
const txtFechaNacimiento = document.getElementById("fechaNacimiento");
const txtCargo = document.getElementById("cargo");

// Variables
let listaEmpleados = [];
// Objects
function Empleado(txtLegajo,txtNombre,txtApellido,txtFechaNacimiento,txtCargo){
    this.legajo = txtLegajo;
    this.nombre = txtNombre;
    this.apellido = txtApellido;
    this.fechaNacimiento = txtFechaNacimiento;
    this.cargo = txtCargo;
}

// Functions
const cargarEmpleado = ()=>{
    let empleado = new Empleado(txtLegajo.value,txtNombre.value,txtApellido.value,txtFechaNacimiento.value,txtCargo.value);
    listaEmpleados.push(empleado);
    alert("Empleado cargado con Exito");
}

const mostrarEmpleados = ()=>{
    let mensaje = 'Empleados: \n';
    for (let empleado of listaEmpleados) {
        for(let propiedad in empleado){
            mensaje += `${propiedad}: ${empleado[propiedad]} \n`;
        }
        mensaje += '\n';
    }
    alert(mensaje);
}