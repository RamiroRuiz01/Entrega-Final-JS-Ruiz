
//declaración arrays

let nombre = prompt ("Bienvenido a la tienda Confort Zone! Por favor, ingrese su nombre")
while (isFinite(nombre)){
    nombre = prompt("No se permiten números. Ingrese un nombre válido")
}

let mail = prompt ("Hola " + nombre + ", a continuación ingrese su dirección de e-mail")

//declaro bucle para la edad

do{numero = parseInt(prompt("Perfecto! A continuación, ingrese su edad"))}
while (numero < 10 || numero >100 || isNaN (numero))

alert ("Oprima aceptar para dirigirse a la compra")

//declaro variable para los productos

let productos = prompt ("Seleccione el número del juego que desea comprar de la tienda: 1) Fifa 23: $8500 - 2) Resident evil 4: $9600 - 3) God of war: $6000 - 4) Star wars jedi: $9200 - 5) Spider-man Miles: $11900 - 6) Horizon 2: $10200 - 7) Need for speed: $7900 - 8) Alan Wake remastered: $8400")


//declaración variable de precio

let precio= 0
let produc = "juegos"

if (productos == "1" || productos == "2" || productos == "3" || productos == "4" || productos == "5" || productos == "6" || productos == "7" || productos == "8") {

switch (productos) {
    case "1":
        precio = 8500;
        produc = "Fifa 23"
        break;

    case "2":
        precio = 9600;
        produc = "Resident evil 4"
        break;

    case "3":
        precio = 6000;
        produc = "God of war"
        break;

    case "4":
        precio = 9200;
        produc = "Star wars jedi"
        break;

    case "5":
        precio = 11900;
        produc = "Spider-man Miles"
        break;

    case "6":
        precio = 10200;
        produc = "Horizon 2"
        break;

    case "7":
        precio = 7900;
        produc = "Need for speed"
        break;

    case "8":
        precio = 8400;
        produc = "Alan Wake remastered"
        break;
    }
        }


//declaración variable para la cantidad

let unidades = parseInt( prompt("¿Cuantas unidades del " + produc + " va a comprar?"))

let resultado = 0

function multiplicar ( precio, cantidad) {
    resultado = precio * cantidad
}

function mostrar (mensaje){
    alert ("Usted selecciono " + unidades + " " + produc + ". El total a pagar es de $" + mensaje + ". A continuación,  será dirigido al sitio web para realizar la compra, muchas gracias!")
}

multiplicar(precio, unidades);
mostrar(resultado)
