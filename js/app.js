const nombre = document.getElementById("nombres")
const apellido = document.getElementById("apellidos")
const numero = document.getElementById("telefono")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")

const form = document.getElementById("contacto")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML=""
    if (nombre.value.length < 3) {
        alert("Mensaje no enviado")
        entrar = true
    }
    if (apellido.value.length < 3) {
       alert("Mensaje no enviado")
        entrar = true
    }
    if ((numero.value.length < 1) && (numero.value.length > 10)){
        alert("Mensaje no enviado")
        entrar = true       
    }
    if (asunto.value.length <= 1) {
        alert("Mensaje no enviado")
        entrar = true
    }
    if (mensaje.value.length <= 1) {
        alert("Mensaje no enviado")
        entrar = true
    }

    if(entrar){
       parrafo.innerHTML=warnings; 
    } else{
        alert("Mensaje Enviado")
    }
})
