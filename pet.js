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
listaProductos.push(new Productos("-", "undefined", "undefined", "undefined", "undefined", "undefined"));
listaProductos.push(new Productos(1, "$6000", "Royal Eukanuba", "Alimento", "15", "20 kg","img"));
listaProductos.push(new Productos(2, "$3000", "Vital Premium", "Alimento", "15", "15kg","img"));
listaProductos.push(new Productos(3, "$4000", "Purina dogui", "Alimento", "23", "20kg","img"));
listaProductos.push(new Productos(4, "$500", "Ratita", "Juguete", "20", "","img"))
listaProductos.push(new Productos(5, "$500", "hueso", "Juguete", "0", "","img"))
listaProductos.push(new Productos(6,"$400","Pelota","Juguete","10","","img"))








const menuFilter = (prod) => {
    return listaProductos.filter(item => item.tipo == prod)
}



const menuCompra = () => {
    let menu = parseInt(prompt("Que desea comprar? \n 1-Alimento \n 2- Juguetes \n 3- Ambas"))

    switch (menu) {
        case 1: //return alimentos
            let array1 = menuFilter("Alimento");
            let msj = `Listado Alimentos \n`
            array1.forEach(item => {
                msj += `ID: ${item.id} 
                Nombre: ${item.nombre} 
                Precio: ${item.precio} 
                Peso: ${item.peso}\n`
            }); alert(msj)
            break;
        case 2: //return juguetes
            let array2 = menuFilter("Juguete");
            let msj1 = `Listado Juguetes \n`
            array2.forEach(item => {
                msj1 += `Nombre: ${item.nombre}  
                Precio: ${item.precio} \n`
            })
            alert(msj1);
            break;

        case 3: // return Lista completa
            let array3 = listaProductos;
            let msj2 = `Listado completo \n`
            array3.forEach(item => {
                msj2 += `
                ID: ${item.id}
                Nombre: ${item.nombre} 
                Precio: ${item.precio} 
                Tipo: ${item.tipo}\n`
            })
            alert(msj2)
            default:
                return alert(`Su opción no es correcta${nombre} escoge una opción valida entre 1 y 3`);
            } 
}


let nombre = prompt("Bienvenido a TiendaPet, antes de ir al menú de compra nos gustaría saber tu nombre, por favor introduce uno");
let msj = alert(`Un placer conocerte ${nombre}, a continuación te mostraremos nuestro menú de compra`);
let tienda = 1;

while (tienda != 0) {
    let menuInicial = parseInt(prompt(`${nombre} Escoge una opción \n 1- Menú de compra \n 2- Salir`));
    switch (menuInicial) {
        case 1:
            menuCompra();
            break;
        case 2:
            tienda = 0;

    }
    

} 

