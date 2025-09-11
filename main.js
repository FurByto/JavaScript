
alert("Bienvenido a al primera entrega!")


//DRY:  Dont repeat yourself

/* Premisas de la entrega:

Declarar variables, constantes y arrays

Crear 3 o màs variables en js que generen interacción

Agregar ciclos de iteración o condicionantes necesarios para que el proyecto funcione correctamente

Integrar el uso de la consola JS y de los cuadros de diàlogo PROMPT, CONFIRM Y ALERT (al menos 1 vez cada uno)

*/


/*Armar inventario de items en almacen

1)  Armar array con lista de items
2)  Pedir carga de producto nuevo con prompt
3)  Permitir consultar cantidad de algun item
4) Utilizar funcion que sume el producto cargado o descargado

*/

//Armado de array inicial


const idEmpleados = [
    {id: 15637, empleado: "Juan"},
    {id: 56785, empleado: "Jose"},
    {id:785695, empleado: "Facundo"},
]
console.log(idEmpleados)
//let idEmpleado= Number(prompt("Colocar id de empleado"));

/*if(idEmpleados.includes(idEmpleado)){
    alert("Bienvenido, eres parte del equipo!");
}
*/
const idEmpleado = Number(prompt("Coloque su id"))

console.log(idEmpleado)

const idExiste = idEmpleados.some(objeto => objeto.id === idEmpleado);
if(idExiste) {
    console.log("Bienvenido");
} else {
    console.log("No eres parte del equipo");
}

let idEncontrado=false

for(let i = 0 ; i<idEmpleados.length; i+1) {
    if(idEmpleados[i] === idEmpleado) 
        idEncontrado=true;
        break;
    }






/*const empleadoEncontrado = idEmpleados.find(empleado => empleado.id === idEmpleado);
console.log (typeof(empleadoEncontrado))


while (empleadoEncontrado) {
    console.log("Bienvenido " + empleadoEncontrado);
    idEmpleado = Number(prompt("Coloque su id"))
    }

*/


let Incluye = (idEmpleados.includes(idEmpleado))

/*while(Incluye = false) {
    alert("UD no es parte del equipo");
    idEmpleado = Number(prompt("Coloque su id"));
    console.log("El id " + idEmpleado + " no pertenece al equipo");
    console.log(Incluye);
}*/





const itemsActuales = [
    {nombre: "herbicida", cantidad:100},
    {nombre: "fungicida", cantidad:105},
    {nombre:"insecticida", cantidad:450},
]


console.table ( itemsActuales)


let productoBuscado = prompt("Ingrese el producto buscado")


const cantidadDeProducto1 = itemsActuales.find(item => item.nombre=== productoBuscado);
console.log(cantidadDeProducto1)

let monto = prompt("Coloque monto a dolarizar")

const tipoDeCambio = 1375

function dolarizar (monto) {
    return (monto / tipoDeCambio);
}

console.log("El monto en dólares es de " + dolarizar(monto));

function sumarIva (monto) {
    return (monto*1.21)
}

console.log("El monto en pesos con iva incluido es de " +sumarIva(monto))

//const cantidadDeProducto = buscarCantidad(itemsActuales, productoBuscado);
//console.log("La cantidad del producto es: " + cantidadDeProducto );


/*const cantidadDeProducto = buscarCantidad(itemsActuales, productoBuscado);
console.log("La cantidad del item buscado es : ${cantidadDelProducto}");
*/
 
/*

Ver cómo hacer que traiga la cantidad del libro ingresado!!!


let productoBuscado = prompt("Colocar nombre buscado")
const productoEncontrado = itemsActuales.find(nombre = productoBuscado)

let cantidadBuscada = productoBuscado.cantidad
console.log(cantidadBuscada)*/

//console.log(productoBuscado)
//console.log(productoEncontrado)

/*
if (productoBuscado) {
    console.log( "La cantidad de {productoBuscado} es de ${productoBuscado.cantidad}");
} else{
    console.log("Producto no encontrado");
}
*/
