const portada = document.getElementById("portada")
const nombreDestino = document.getElementById("portada-cambiante")
const mejores = document.getElementById("lista-mejores")
let htmlOfertas
let arrayOferta = []
let nomDestPantalla = ""
let n = 0
let x = 5000
class viajes{
    constructor(foto,nombre,idArchivos){
        this.foto = foto
        this.nombre = nombre
        this.idArchivos= idArchivos
    }
}
let brasil = new viajes("./image/5000.jpg", "Rio de Janeiro","brasil")
let bariloche = new viajes("./image/20000.jpg", "Bariloche","bari")
let puertoIguazu = new viajes("./image/10000.jpg", "Puerto Iguazú","puerto")
let puntaEste = new viajes("./image/15000.jpg", "Punta del Este","punta")
let newYork = new viajes ("./image/25000.jpg", "New York", "new")
arrayOferta.push(bariloche, brasil, puertoIguazu, puntaEste, newYork)
function iniciar(){
    cambioPortada()
    ofertas()
}
function ofertas(){
    arrayOferta.forEach(oferta => {
        htmlOfertas = `
        <li class="ofertas">
            <a href="./${oferta.idArchivos}.html" class="a">
                <div id="${oferta.idArchivos}" class="foto-portada">
                    <div>
                        <h3 class="nombre-oferta">${oferta.nombre}</h3>
                    </div>
                    <div class="caja-reserva">
                        <h4 class="boton-reserva">Reservar</h4>
                    </div>
                </div>
            </a>
        </li>
        `
        mejores.innerHTML += htmlOfertas
    });
     
}
function cambioPortada(){
    window.setInterval(function(){
        nombreComprobar()
        if(n=x){
            portada.src = "./image/"+ x + ".jpg"
            nombreDestino.innerHTML = nomDestPantalla
            if(x==25000){
                x=5000
            }else{
                x=x+5000
            }
        }
        
        n++
    },x);
}
function nombreComprobar(){
    if(x==5000){
        nomDestPantalla = "Rio de Janeiro"
    }else if(x==10000){
        nomDestPantalla = "Puerto Iguazú"
    }else if(x==15000){
        nomDestPantalla = "Punta del Este"
    }else if (x==20000){
        nomDestPantalla = "Bariloche"
    }else if (x==25000){
        nomDestPantalla = "New York"
    }
}
window.addEventListener("load", iniciar) 