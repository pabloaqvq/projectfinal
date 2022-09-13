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
listaProductos.push(new Productos(1, "$6000", "Royal Eukanuba", "Alimento", "15", "20 kg", "./imgs/D_NQ_NP_708390-MLA44830126840_022021-O.jpg" ));
listaProductos.push(new Productos(2, "$3000", "Vital Premium", "Alimento", "15", "15kg","./imgs/premium-adulto-vital-can-15-kg.jpg"));
listaProductos.push(new Productos(3, "$4000", "Purina dogui", "Alimento", "23", "20kg","./imgs/dogui-cachorros.jpg"));
listaProductos.push(new Productos(4, "$500", "Ratita", "Juguete", "20", "","./imgs/ratita.jpg"))
listaProductos.push(new Productos(5, "$500", "Hueso", "Juguete", "0", "","./imgs/descargar.jpg"))
listaProductos.push(new Productos(6,"$400","Pelota","Juguete","10","","imgs/images.jpg"))

let carritoCompras = []; 

const contenedorProd = document.getElementById("cards")

listaProductos.forEach((producto) => {
const div = document.createElement(`div`)
div.classList.add ("producto")
div.innerHTML = `
<img src=${producto.img} alt="">
<h5>${producto.nombre}</h5>
<p>${producto.precio}</p>
<p> ${producto.tipo}</p>
<a href="#" class="btn btn-primary">Agregar al carrito</a>
` 
contenedorProd.appendChild(div)
})

