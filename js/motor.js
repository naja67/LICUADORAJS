var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora === "apagada") {
        estadoLicuadora = "encendida";
        haceBrrBrr();
        licuadora.classList.add("active");
/*         console.log("La licuadora está encendida."); */
    } else {
        estadoLicuadora = "apagada";
        haceBrrBrr();
        licuadora.classList.remove("active");
    /*     console.log("La licuadora está apagada."); */
    }
}


function haceBrrBrr() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}