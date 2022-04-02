class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = stock;
    }

        actualizarStock(x) {
            this.stock = this.stock - x;
    } 
}

const arrayProductos = [];
arrayProductos.push(new Producto ("textil",1500,3));
arrayProductos.push(new Producto ("pintura",1600,3));
arrayProductos.push(new Producto ("escultura",4000,3));


console.log (arrayProductos);

let total = 0;

function crearCarrito (){
    let otroMas;
    //ciclo
    do{
        let producto = prompt("¿Queres comprar textil ,pintura o escultura");
        let cantidad = parseInt(prompt("Ingrese la cantidad: "));
        let precio;
            switch (producto){
                case arrayProductos[0].nombre:
                    arrayProductos[0].actualizarStock(cantidad);
                    if(arrayProductos[0].stock < 0|| isNaN(cantidad)){
                        alert("lo sentimos en este momento no tenemos stock")
                        arrayProductos[0].stock=arrayProductos[0].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio = arrayProductos[0].precio;
                    }
                    break;
                case arrayProductos[1].nombre:
                    arrayProductos[1].actualizarStock(cantidad);
                    if(arrayProductos[1].stock < 0 || isNaN(cantidad)){
                        alert("Lo sentimos en este momento no tenemos stock")
                        arrayProductos[1].stock = arrayProductos[1].stock+cantidad;
                        precio = 0 ;
                        cantidad = 0;
                    }else{
                        precio = arrayProductos[1].precio;
                    }
                    break;
                case arrayProductos[2].nombre:
                    arrayProductos[2].actualizarStock(cantidad);
                    if(arrayProductos[2].stock < 0 || isNaN(cantidad)){
                        alert("Lo sentimos en este momento no tenemos stock")
                        arrayProductos[2].stock = arrayProductos[2].stock+cantidad;
                        precio = 0 ;
                        cantidad = 0;
                    }else{
                        precio = arrayProductos[2].precio;
                    }
                    break;
                default:
                    alert("alguno de los datos ingresados es incorrecto");
                    precio = 0;
                    cantidad = 0;
            }
            total = total + precio*cantidad;
            otroMas = confirm("¿queres agregar otro producto al carrito");
        
        }while(otroMas);
}

function mostrarTotal (total){
    
    alert("El total es de: $"+total);
}

const producto = arrayProductos.map((el) => el.stock)
    alert (`El stock disponible es ${producto}`)

crearCarrito();
mostrarTotal(total);