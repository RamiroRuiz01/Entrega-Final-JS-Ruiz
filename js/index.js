// ELEMENTOS DEL HEADER

let header = document.createElement("header")
header.style.backgroundColor = "#ffffff"
document.body.appendChild(header)


let logo = document.createElement("div")
logo.className = "logo-nombre"
logo.innerHTML = `<img src="../assets/logo.jpg"></img>`
header.appendChild(logo)
let logoNombre = document.createElement("a")
logoNombre.className = "nombre-pagina"
logoNombre.innerHTML = `<a>TIENDA COMFORT ZONE</a>`
logo.appendChild(logoNombre)

let navbar = document.createElement("navbar")
header.appendChild(navbar)
navbar.className = "navbar"
let ulnavbar = document.createElement("ul")
ulnavbar.className = "ulnavbar"
navbar.appendChild(ulnavbar)

let itemsNavbar = [{nombre:"INICIO"},
                    {nombre:"CONTACTO"},
                    {nombre:"UBICACION"}]


for(const item of itemsNavbar){
    let navbarItem = document.createElement("li")
    navbarItem.innerHTML = `<a href="../index.html">${item.nombre}</a>`
    ulnavbar.appendChild(navbarItem)
}

// ELEMENTOS DEL MAIN

let main = document.createElement("main")
document.body.appendChild(main)
let cards = document.createElement("section")
cards.className = "cards"
main.appendChild(cards)


const obtenerProductos = async() => {
    const res = await fetch("productos.json");
    const productos = await res.json();

    productos.forEach((producto) => {
        let card = document.createElement("article")
        card.className = "card"
        card.innerHTML = `<img src="${producto.img}" class="card-img"></img>
                            <div class="card-body">
                                <h3 class="nombre-producto">${producto.nombre}</h3>
                                <h4 class="valor-card">VALOR: $${producto.precio}</h4>
                            </div>`;
        cards.appendChild(card)
    
        let agregar = document.createElement("button")
        agregar.classList = "btn-agregar"
        agregar.innerText = "AGREGAR"      
        card.appendChild(agregar)
        agregar.addEventListener("click", () =>{
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                img: producto.img
            })
    
            localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    
            carroconfirmado = JSON.parse(localStorage.getItem("carritoStorage"));
            console.log(carroconfirmado)
    
            carritosection.style.display = "flex"
            carritosection.innerHTML = ""
    
            total = carroconfirmado.reduce((acc,el)=>acc + el.precio, 0)
            console.log(total)
            totalproductos.innerHTML = `TOTAL A PAGAR: $${total}`
    
            carroconfirmado.forEach((producto) => {
                let itemcarrito = document.createElement("div")
                itemcarrito.className = "item-carrito"
                itemcarrito.innerHTML = `<img src="${producto.img}" class="item-igm"></img>
                                            <h4>${producto.nombre}</h4>
                                            <h5>$${producto.precio}</h5>`
                carritosection.appendChild(itemcarrito)     
            })
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 600,
            })
    })
    })

}

obtenerProductos()

let carrito = []
let carroconfirmado = []
let total = []



let carritosection = document.createElement("section")
carritosection.className = "carrito-section"
carritosection.style.display = "none"
main.appendChild(carritosection)


let totalsection = document.createElement("section")
totalsection.className = "total-section"
main.appendChild(totalsection)
let confirmarCompra = document.createElement("button")
confirmarCompra.className = "btn-confirmar"
confirmarCompra.innerText = "CONFIRMAR CARRITO"
confirmarCompra.onclick = () =>{
    carroconfirmado.length >=1 ? Swal.fire({
        title: `PERFECTO, EL TOTAL ES: $${total}`,
        text: "¿Desea abonar o seguir comprando?",
        icon: 'success',
        showDenyButton: true,
        denyButtonText: `SEGUIR COMPRANDO`,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'ABONAR'
    })
    : Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'EL CARRITO ESTÁ VACÍO',
        showConfirmButton: false,
    })
}
totalsection.appendChild(confirmarCompra)
let vaciarCarrito = document.createElement("button")
vaciarCarrito.className = "vaciar-carrito"
vaciarCarrito.innerText = "VACIAR CARRITO"
totalsection.appendChild(vaciarCarrito)
vaciarCarrito.onclick = () =>{
    localStorage.removeItem("carritoStorage")
    totalproductos.innerHTML = ""
    carroconfirmado = []
    carritosection.style.display = "none"
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'CARRITO VACÍO',
        showConfirmButton: false,
        timer: 600,
        })
}
let totalproductos = document.createElement("div")
totalproductos.className = "total-productos"
totalsection.appendChild(totalproductos)

// ELEMENTOS DEL FOOTER

let footer = document.createElement("footer")
document.body.appendChild(footer)
let textoFooter = document.createElement("div")
textoFooter.className = "texto-footer"
textoFooter.innerHTML = "Sitio web creado por Ramiro Ruiz"
footer.appendChild(textoFooter)
