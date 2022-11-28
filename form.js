const form = document.getElementById("form");

const ulForm = document.getElementById("form-ul");

const formContainer = document.getElementById("form-container");
const confirmContainer = document.getElementById("confirm-container");

const inpNombre = document.getElementById("nombre");
const inpMail = document.getElementById("mail");
const txtMsg = document.getElementById("msg");
const inpArray = [inpNombre, inpMail, txtMsg];

const errorNombre = document.createElement("p");
const errorMail = document.createElement("p");
const errorMsg = document.createElement("p");
const errores = [errorNombre, errorMail, errorMsg];
flags = [false, false, false];

errores.forEach((aux, i) => {
    aux.classList.add("error-message");
    ulForm.children[i].appendChild(aux);
})

/*form.addEventListener("change", (e) => {
    //validacion nombre
    /!*    if (x.value.trim().length > maxValue) {
            errorP.innerHTML = "El " + valueName + " no puede superar los " + maxValue + " caracteres";
            x.classList.remove("correct-border");
            x.classList.add("error-border");
            flags[flagIndex] = false;
        } else {
            errorP.innerHTML = "";
            x.classList.remove("error-border");
            x.classList.add("correct-border")
            flags[flagIndex] = true;
        }*!/


    //validacion email
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inpMail.value)) {
        errorMail.innerHTML = "";
        inpMail.classList.remove("error-border");
        inpMail.classList.add("correct-border");
        flags[4] = true;
    } else {
        errorMail.innerHTML = "El email ingresado es incorrecto, ingrese un formato valido de email (Ej. nombreficticio@email.com)";
        inpMail.classList.remove("correct-border");
        inpMail.classList.add("error-border");
        flags[4] = false;
    }

    //validacion mensaje
    mayorAX(txtMsg, "mensaje", errorMsg, 300, 5)

    clearEmpty();
})*/

form.addEventListener("submit", (e) => {
    //evitando q se envie el formulario

    e.preventDefault();
    
    //validacion nombre
    if (inpNombre.value.trim() === "") {
        errorNombre.innerHTML = "El campo no puede estar vacio";
        inpNombre.classList.remove("correct-border");
        inpNombre.classList.add("error-border");
        flags[0] = false;
    } else if (inpNombre.value.trim().length > 20) {
        errorNombre.innerHTML = "El nombre no puede superar los 20 caracteres";
        inpNombre.classList.remove("correct-border");
        inpNombre.classList.add("error-border");
        flags[0] = false;
    } else {
        errorNombre.innerHTML = "";
        inpNombre.classList.remove("error-border");
        inpNombre.classList.add("correct-border")
        flags[0] = true;
    }

    //validacion email
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inpMail.value)
    ||inpMail.value==="") {
        errorMail.innerHTML = "";
        inpMail.classList.remove("error-border");
        inpMail.classList.add("correct-border");
        flags[1] = true;
    } else {
        errorMail.innerHTML = "El email ingresado es incorrecto, ingrese un formato valido de email (Ej. nombreficticio@email.com)";
        inpMail.classList.remove("correct-border");
        inpMail.classList.add("error-border");
        flags[1] = false;
    }
    //validacion mensaje
    if (txtMsg.value.trim() === "") {
        errorMsg.innerHTML = "El campo no puede estar vacio";
        txtMsg.classList.remove("correct-border");
        txtMsg.classList.add("error-border");
        flags[2] = false;
    } else if (txtMsg.value.trim().length < 10) {
        errorMsg.innerHTML = "El nombre no puede tener menos de 10 caracteres";
        txtMsg.classList.remove("correct-border");
        txtMsg.classList.add("error-border");
        flags[2] = false;
    } else if (txtMsg.value.trim().length > 300) {
        errorMsg.innerHTML = "El nombre no puede tener mas de 300 caracteres";
        txtMsg.classList.remove("correct-border");
        txtMsg.classList.add("error-border");
        flags[2] = false;
    } else {
        errorMsg.innerHTML = "";
        txtMsg.classList.remove("error-border");
        txtMsg.classList.add("correct-border")
        flags[2] = true;
    }
    flags.forEach((aux,i)=> {
        console.log(aux+" error "+i) ;
    })
    if (flags[0] && flags[1] && flags[2]) {
        let flagT=true;
        confirmContainer.classList.remove("hidden");
        const ulMessage= document.createElement("ul");

        confirmContainer.appendChild(ulMessage);
        ulMessage.appendChild(document.createElement("li")).innerHTML = inpNombre.value +"&nbsp"    
        if(inpMail.value.length > 0) {
            ulMessage.appendChild(document.createElement("li")).innerHTML = "&nbsp"+"("+inpMail.value+")"+"&nbsp"
        }
        ulMessage.appendChild(document.createElement("li")).innerHTML = "&nbsp"+"dice"+"&nbsp" + txtMsg.value
        ulMessage.appendChild(document.createElement("hr"))

      /*  confirmContainer.appendChild(document.createElement("p")).innerHTML = "<b>Nombre: </b>" + inpNombre.value;
        confirmContainer.appendChild(document.createElement("p")).innerHTML = "<b>Email: </b>" + inpMail.value;
        confirmContainer.appendChild(document.createElement("p")).innerHTML = "<b>Mensaje: </b>" + txtMsg.value;*/
    }

})