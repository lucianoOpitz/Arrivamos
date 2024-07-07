const header = document.getElementById("header")
const footer = document.getElementById("footer")
function iniciar(){
    header.innerHTML = `
    <img id="logo" src="./image/logo.png" alt="ArriVamos">
    <nav id="menu">
        <ol id="lista-menu">
            <li class="botones-menu">
            <a href="./index.html" class="a">Inicio</a>
            </li>
            <li class="botones-menu">
            <a href="./index.html#slogan-ofertas" class="a">Vuelos</a>
            </li>
            <li class="botones-menu">
            <a href="#footer" class="a">Contactar</a>
            </li>
        </ol>
    </nav>
    `
    footer.innerHTML = `
    <section id="contacto">
    <h5>Puede Seguirnos en...</h5> 
        <section id="links-contacto">   
            <div id="ig" class="link">
                <img class="icon-f"src="./image/ig.png" alt="IG">
                <h6 class="hcontact">Instagram</h6>
            </div>
            <div id="fb" class="link">
                <img class="icon-f"src="./image/fb.png" alt="FB">
                <h6 class="hcontact">Facebook</h6>
            </div>
            <div id="lk" class="link">
                <img class="icon-f" src="./image/lk.png" alt="LK">
                <h6 class="hcontact">Linkedin</h6>
            </div>
        </section>
    </section>
    <setion id="burocracia">
        <h5>¿No encontras algo?</h5>
        <section id="links-burocracia">
            <div id="terminos" class="link-b">
                <h6>Terminos y condiciones</h6>
            </div>
            <div id="privacidad" class="link-b">
                <h6>Politicas de Privacidad</h6>
            </div>
            <div id="direccion" class="link-b">
                <h6>Nuestras oficinas</h6>
            </div>
            <div id="responsable" class="link-b">
                <h6>Responsabilidad de uso</h6>
            </div>
            <div id="help" class="link-b">
                <h6>Necesito ayuda</h6>
            </div>
        </section>
    </section>
    `
    
}
window.addEventListener("load", iniciar) 