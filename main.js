
alert("Bienvenido a segunda entrega!")


const idEmpleados = [
    {id: 15637, empleado: "Juan"},
    {id: 56785, empleado: "Jose"},
    {id:785695, empleado: "Facundo"},
]
console.log(idEmpleados)




const itemsActuales = [
    {nombre: "herbicida", cantidad:100},
    {nombre: "fungicida", cantidad:105},
    {nombre:"insecticida", cantidad:450},
]





const btnTag = document.getElementById("boton_1");

btnTag.addEventListener("click", () => {
    console.log("click en el boton")
    const divs = document.getElementsByTagName("div");
    for (let div of divs){
        div.style.backgroundColor= "grey"
        div.style.textDecorationColor = "white"
    }
    
})

const btnTagEmpl = document.getElementById("boton_2");

btnTagEmpl.addEventListener("click", ()=>{
    console.log ( "Click en querer ver productos" );
    console.log("-------------------------------------------------------");
    
    
    const ID_buscado = Number(prompt ("Coloque su ID"));
    console.log(ID_buscado);
    
    const esEmpleado = idEmpleados.includes({id : ID_buscado});
    console.log ( esEmpleado)

    console.table ( itemsActuales);  
})


const btnTagAgregarProducto = document.getElementById("boton_3");

btnTagAgregarProducto.addEventListener("click", ()=>{
    console.log ( "Click en agregar un producto" );
    console.log("-------------------------------------------------------");
    
    
    const nuevoProducto = Number(prompt ("Colocar nombre de producto"));
    console.log(nuevoProducto);
    itemsActuales.push(nuevoProducto);
    console.table(itemsActuales)
})


const btnTagGuardar = document.getElementById("boton_4");

btnTagGuardar.addEventListener("click", ()=>{
    console.log ( "Click en guardar" );
    console.log("-------------------------------------------------------");
    
    localStorage.setItem("productos", JSON.stringify(itemsActuales));
    console.log("Lista guardada en Local Storage")
    
})
