const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};
































// let nombre = prompt ("Bienvenido a la tienda Confort Zone! Por favor, ingrese su nombre")
// while (isFinite(nombre)){
//     nombre = prompt("No se permiten números. Ingrese un nombre válido")
// }

// console.log("NOMBRE DE USUARIO: " + nombre)

// let mail = prompt ("Hola " + nombre + ", a continuación ingrese su dirección de e-mail")

// console.log("E-MAIL: " + mail)

// do{numero = parseInt(prompt("Perfecto! A continuación, ingrese su edad"))}
// while (numero < 10 || numero >100 || isNaN (numero))

// console.log("EDAD: " + numero)

// alert ("Oprima aceptar para dirigirse a la compra")

// //declaro variable para los productos

// const operacion = (op) =>{
//     if (op == "multiplicar") {
//         return (a, b) => a * b
//     }
// }

// class juegos{
//     constructor(nombre,precio){
//         this.nombre = nombre,
//         this.precio = precio
//     }
// }

// const carroCompras = []

// const fifa = new juegos("Fifa 23", 8500)
// const residentEvil = new juegos("Resident evil 4", 9600)
// const godOfWar = new juegos("God of war", 6000)
// const starWars = new juegos("Star wars jedi", 9200)
// const spiderMan = new juegos("Spider-man Miles", 11800)
// const horizon = new juegos("Horizon 2", 10300)
// const needForSpeed = new juegos("Need for speed", 8100)
// const alanWake = new juegos("Alan Wake remastered", 7900)

// let productos
// let cantidad

// const comprar = () => {
//     do{
//         productos = parseInt(prompt("Seleccione la opción numérica del juego que desea comprar de la tienda:" + "\n1) Fifa 23: $8500" + "\n2) Resident evil 4: $9600" + "\n3) God of war: $6000" + "\n4) Star wars jedi: $9200" + "\n5) Spider-man Miles: $11800" + "\n6) Horizon 2: $10300" + "\n7) Need for speed: $8100" + "\n8) Alan Wake remastered: $7900"))
//     }while(productos != 1 && productos != 2 && productos != 3 && productos != 4 && productos != 5 && productos != 6 && productos != 7 && productos != 8){
//         switch(productos){
//             case 1:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + fifa.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + fifa.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, fifa.precio))};
//                 break;
//             case 2:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + residentEvil.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + residentEvil.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, residentEvil.precio))};
//                 break;
//             case 3:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + godOfWar.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + godOfWar.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, godOfWar.precio))};
//                 break;
//             case 4:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + starWars.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + starWars.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, starWars.precio))};
//                 break;
//             case 5:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + spiderMan.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + spiderMan.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, spiderMan.precio))};
//                 break;
//             case 6:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + horizon.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + horizon.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, horizon.precio))};
//                 break;
//             case 7:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + needForSpeed.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + needForSpeed.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, needForSpeed.precio))};
//                 break;
//             case 8:
//                 do{cantidad = parseInt(prompt("¿Cuantas unidades del " + alanWake.nombre + " va a comprar?"))
//             }while(isNaN(cantidad) || (cantidad <= 0)){
//                 let total = operacion("multiplicar")
//                 alert("Usted ha agregado " + cantidad + " unidad/es de " + alanWake.nombre + " al carrito de compras")
//                 carroCompras.push(total(cantidad, alanWake.precio))};
//                 break;
//         }
//     }
// }

// comprar ()

// let añadir

// const añadirJuego = () => {do{ añadir = parseInt(prompt("¿Desea comprar algún otro juego? Seleccione 1 o 2" + "\n1) Si" + "\n2) No"))}while(añadir != 1 && añadir != 2){
//     switch(añadir){
//         case 1: comprar();
//         case 2: break
//         }
//     }
// }

// añadirJuego()

// while(añadir === 1){
//     añadirJuego()
// }

// const total = carroCompras.reduce((acumulador, elemento) => acumulador + elemento, 0)

// alert("El total a abonar por el/los juegos seleccionados es: $" + total)

// console.log("TOTAL A ABONAR: $" + total)

