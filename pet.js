//final proj
class Productos {


    constructor(id, precio, nombre, tipo, stock, peso, img) {
        this.id = id
        this.precio = precio
        this.nombre = nombre
        this.tipo = tipo
        this.stock = stock
        this.peso = peso
        this.img = img

    }

} const listaProductos = [];
listaProductos.push(new Productos(1, "$6000", "Royal Eukanuba", "Alimento", "15", "20 kg", "./imgs/D_NQ_NP_708390-MLA44830126840_022021-O.jpg"));
listaProductos.push(new Productos(2, "$3000", "Vital Premium", "Alimento", "15", "15kg", "./imgs/premium-adulto-vital-can-15-kg.jpg"));
listaProductos.push(new Productos(3, "$4000", "Purina dogui", "Alimento", "23", "20kg", "./imgs/dogui-cachorros.jpg"));
listaProductos.push(new Productos(4, "$500", "Ratita", "Juguete", "20", "", "./imgs/ratita.jpg"))
listaProductos.push(new Productos(5, "$500", "Hueso", "Juguete", "3", "", "./imgs/descargar.jpg"))
listaProductos.push(new Productos(6, "$400", "Pelota", "Juguete", "10", "", "imgs/images.jpg"))

let carritoCompras = [];

const contenedorProd = document.getElementById("cards")
const contenedorCarrito = document.getElementById("carrito-contenedor")

//inyect card al dom
listaProductos.forEach((producto) => {
    const div = document.createElement(`div`)
    div.classList.add("producto")
    div.innerHTML = `
<img src=${producto.img} alt="">
<h3>${producto.nombre}</h3>
<p>${producto.precio}</p>
<p> ${producto.tipo}</p>
<p>Stock: ${producto.stock}</p>
<button id ="agregar${producto.id}" class="btn btn-primary">Agregar<i class="bi bi-cart-plus-fill"></i></button>`
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
//func leer el carrito
const leerCarrito = () => {
    carritoCompras.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ("prodEnCarrito")
        div.innerHTML=`
        <p>${prod.nombre}
        <p>Precio: ${prod.precio}
        <button onclick="eliminarDelCarrito (${prod.id})" class="btn btn-danger"><i class="bi bi-trash"></i></button>`
        contenedorCarrito.appendChild(div)
    })
}
/* //func vaciar carrito
const vaciarCarrito = (delProd)=>{
    const item = carritoCompras.find((prod => prod.id === delProd))
    const indice = carritoCompras.indexOf(item)
        carritoCompras.splice(indice, 1)
        leerCarrito();
} */



