
const contenedorProd = document.getElementById("cards")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const vaciarCarro = document.getElementById("vaciar-carrito")

let carritoCompras = [];


vaciarCarro.addEventListener('click',() =>{
    carritoCompras.length = 0;   
    leerCarrito();
   })


//inyect card al dom
listaProductos.forEach((producto) => {
    const div = document.createElement(`div`)
    div.classList.add("producto")
    div.innerHTML = `
<img src=${producto.img} alt="img.jpg">
<h3>${producto.nombre}</h3>
<p>$${producto.precio}</p>
<p> ${producto.tipo}</p>
<p>Stock: ${producto.stock}</p>
<button id ="agregar${producto.id}" class="btn btn-success">Agregar<i class="bi bi-cart-plus-fill"></i></button>`
    contenedorProd.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarro(producto.id)
    })
})




//func abrir carrito
document.getElementById("btn-car").addEventListener("click", () => {
    const container = document.getElementById("modalSheet")
    container.classList.remove("d-none")
    container.classList.add("d-block")
    //func cerrar carrito
    document.getElementById("btn-close").addEventListener("click", () => {
        const container = document.getElementById("modalSheet")
        container.classList.remove("d-block")
        container.classList.add("d-none")
    })
})

//func agregar al carrito
const agregarAlCarro = (agregarId) => {
    const item = listaProductos.find((agregar) => agregar.id === agregarId)
    carritoCompras.push(item)
    leerCarrito()
}


//delete carrito
const eliminarCarrito = (prodId) => {
    const item = carritoCompras.find((prod) => prod.id === prodId)
    const indice = carritoCompras.indexOf(item)
    carritoCompras.splice (indice,1)
    leerCarrito()
}      
//func leer el carrito
const leerCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carritoCompras.forEach((prod) => {
        const div = document.createElement('tr')
        div.className = ("prodEnCarrito")
        div.innerHTML=`
        <td><b>${prod.nombre}</b></td>
        <td>$${prod.precio}</td>
        <td>Cantidad: <span id=cantidad>${prod.cantidad}</span></td>
        <button onclick="eliminarCarrito(${prod.id})" class="btn btn-danger"><i class="bi bi-trash"></i></button>`
        contenedorCarrito.appendChild(div)
    })
}

