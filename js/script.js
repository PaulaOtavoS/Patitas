const nav = document.querySelector("#nav");
const Abrir = document.querySelector("#Abrir");
const Cerrar = document.querySelector("#Cerrar");

Abrir.addEventListener("click", () => {
    nav.classList.add("navVisible");
})

Cerrar.addEventListener("click", () => {
    nav.classList.remove("navVisible");
})

const mostrar = document.querySelector("#Mostrar");
const cancelar = document.querySelector("#Cancelar");
const login = document.querySelector("#Login");

mostrar.addEventListener("click", () => {
    if (flag == false){
        login.style = "display:block"
        flag = true;
    } else {
        login.style = "display:none"
        flag = false;
    }
})
var flag = false;
cancelar.addEventListener("click", () => {
    login.style = "display:none"
    flag = false;
})