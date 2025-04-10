const dropDown = document.getElementById("mobileMenu");

let dropDownOn = false; 

function abrirMenu() {
    if (!dropDownOn) {
        dropDown.classList.add("mostrar");
        dropDownOn = true;
    } else {
        fecharMenu();
        dropDownOn = false
    }

}

function fecharMenu() {
    dropDown.classList.remove("mostrar")
}

window.onclick = function (event) {
    if (!event.target.matches("#botaoMenu") && !event.target.matches("#iconeMenu")) { 
        fecharMenu();
    }
}