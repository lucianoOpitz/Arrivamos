const servicios = document.getElementById("servicios")
const importe = document.getElementById("importe")
const h1 = document.getElementById("h1")
const img = document.getElementById("seccion-viaje")
let trans
let aloj
let exc
let viaje 
let valor
let pasajes
let abordo = 0
let precio = 0
let menos
arrayViaje=[]
let precioFinal = 0
class viajes{
    constructor(foto,nombre,idArchivos,vuelo,transporte,alojamiento,excursiones){
        this.foto = foto
        this.nombre = nombre
        this.idArchivos= idArchivos
        this.vuelo = vuelo
        this.transporte = transporte
        this.alojamiento = alojamiento
        this.excursiones = excursiones
    }
}
let brasil = new viajes("./image/5000.jpg", "Rio de Janeiro","brasil",350000, 200000, 1000000, 450000)
let bariloche = new viajes("./image/20000.jpg", "Bariloche","bari",250000, 100000, 500000, 150000)
let puertoIguazu = new viajes("./image/10000.jpg", "Puerto Iguazú","puerto",150000, 60000, 300000, 100000)
let puntaEste = new viajes("./image/15000.jpg", "Punta del Este","punta",300000, 150000, 700000, 100000)
let newYork = new viajes ("./image/25000.jpg", "New York", "new",1200000, 300000, 1000000, 350000)
let viajamos = ""
let newViajamos=""
arrayViaje.push(bariloche, brasil, puertoIguazu, puntaEste, newYork)
function iniciar(){
    cargarHtml()
    comprobarH1()
}
function comprobarH1(){
    viajamos = h1.textContent
    newViajamos= viajamos.slice(12)
    if(newViajamos=="Bariloche"){
        img.style.backgroundImage = "url(./image/20000.jpg)"
        viaje = bariloche
    }else if(newViajamos=="Rio de Janeiro"){
        img.style.backgroundImage = "url(./image/5000.jpg)"
        viaje = brasil
    }else if(newViajamos=="Puerto Iguazú"){
        img.style.backgroundImage = "url(./image/10000.jpg)"
        viaje = puertoIguazu
    }else if(newViajamos=="Punta del Este"){
        img.style.backgroundImage = "url(./image/15000.jpg)"
        viaje=puntaEste
    }else if(newViajamos=="New York"){
        img.style.backgroundImage = "url(./image/25000.jpg)"
        viaje=newYork
    }
    comprobarPrecio()
}
function comprobarPrecio(){
    funcionVuelo()
    funcionTransporte()
    funcionAlojamiento()
    funcionExcursiones() 
}
function funcionVuelo(){
    precioFinal=precioFinal+viaje.vuelo
    modificarPrecioMas(viaje.vuelo)
}
function funcionTransporte(){
    precioFinal=precioFinal+viaje.transporte
    modificarPrecioMas(viaje.transporte)
    if (trans.checked==false){
        precioFinal=precioFinal-viaje.transporte
        modificarPrecioMenos(viaje.transporte)
    }
}
function funcionAlojamiento(){
    precioFinal=precioFinal+viaje.alojamiento
    modificarPrecioMas(viaje.alojamiento)
    if (aloj.checked==false){
        precioFinal=precioFinal-viaje.alojamiento
        modificarPrecioMenos(viaje.alojamiento)
    }
}
function funcionExcursiones(){
    precioFinal=precioFinal+viaje.excursiones
    modificarPrecioMas(viaje.excursiones)
    if (exc.checked==false){
        precioFinal=precioFinal-viaje.excursiones
        modificarPrecioMenos(viaje.excursiones)
    }
}
function previaTransporte(){
    if(trans.checked==true){
        precioFinal=precioFinal+viaje.transporte
        modificarPrecioMas(viaje.transporte)
    }else{
        precioFinal=precioFinal-viaje.transporte
        modificarPrecioMenos(viaje.transporte)
    }
}
function previaAlojamiento(){
    if(aloj.checked==true){
        precioFinal=precioFinal+viaje.alojamiento
        modificarPrecioMas(viaje.alojamiento)
    }else{
        precioFinal=precioFinal-viaje.alojamiento
        modificarPrecioMenos(viaje.alojamiento)
    }
}
function previaExcursiones(){
    if(exc.checked==true){
        precioFinal=precioFinal+viaje.excursiones
        modificarPrecioMas(viaje.excursiones)
    }else{
        precioFinal=precioFinal-viaje.excursiones
        modificarPrecioMenos(viaje.excursiones)
    }
}
function modificarPrecioMas(sumar){
    let cantAbordo = 0
    while(cantAbordo<=abordo){
        precio = precio + sumar
        cantAbordo++
    }
    valor.innerHTML = "$"+formatearNumero(precio)
}
function modificarPrecioMenos(menos){
    let cantAbordo = 0
    while(cantAbordo<=abordo){
        precio = precio - menos
        cantAbordo++
    }
    valor.innerHTML = "$"+formatearNumero(precio)
}
function masPasajes(){
    abordo=abordo+1
    pasajes.innerHTML = abordo+1
    precioFinal=0
    precio = 0
    comprobarPrecio()
    valor.innerHTML = "$"+formatearNumero(precio)
    menos.disabled=false
}
function menosPasajes(){
    if(abordo==0){
        menos.disabled=true
    }else{
        abordo=abordo-1
        pasajes.innerHTML = abordo+1
        precioFinal=0
        precio = 0
        comprobarPrecio()
    }
    valor.innerHTML = "$"+formatearNumero(precio)
    
}
function formatearNumero(numero){
    return new Intl.NumberFormat("es-CL").format(numero)
}
function cargarHtml(){
    servicios.innerHTML=`
    <ol id="lista-servicios">
        <li class="servicio"> 
            <img src="./image/vuelo.png" alt="servicio" class="dif-servicios">
            Vuelo
            <input type="checkbox" checked=true disabled=true>   
        </li>
        <li class="servicio"> 
            <img src="./image/transporte.png" alt="servicio" class="dif-servicios">
            Transporte
            <input type="checkbox" checked=true id="transporte" onClick="previaTransporte()">  
        </li>
        <li class="servicio">
            <img src="./image/alojamiento.png" alt="servicio" class="dif-servicios">
            Alojamiento
            <input type="checkbox" checked=true id="alojamiento" onClick="previaAlojamiento()">   
        </li>
        <li class="servicio">
            <img src="./image/excursiones.png" alt="servicio" class="dif-servicios">
            Excursiones
            <input type="checkbox" checked=true id="excursiones" onClick="previaExcursiones()">   
        </li>
    </ol>
    `
    trans = document.getElementById("transporte")
    aloj = document.getElementById("alojamiento")
    exc = document.getElementById("excursiones")
    importe.innerHTML=`
    <div id="pasajeros">
        <h4 id="cant-pasajeros">Cantidad de Pasajeros</h4>
        <div id="mas-menos">
            <button id="menos" class="boton" onClick="menosPasajes()" disabled=true>-</button>
            <h4 id="pasajes">1</h4>
            <button id="mas" class="boton" onClick="masPasajes()">+</button>
        </div>
    </div>
    <div id="valores-pagar">
        <h4>Importe</h4>
        <h4 id="valor">$1.000.000</h4>
    </div>
    <button id="pagar">Pagar</button>
    `
    menos = document.getElementById("menos")
    valor = document.getElementById("valor")
    pasajes = document.getElementById("pasajes")
}

window.addEventListener("load",iniciar)