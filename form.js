 //declaracion de variables

 //obteniendo elemntos del DOM a traves de la id
const form = document.getElementById("form");
const ulForm = document.getElementById("form-ul");
const confirmContainer = document.getElementById("confirm-container");
const inpNombre = document.getElementById("nombre");
const inpMail = document.getElementById("mail");
const txtMsg = document.getElementById("msg");

//creando los elementos html para mostrar los errores en el formulario
const errorNombre = document.createElement("p");
const errorMail = document.createElement("p");
const errorMsg = document.createElement("p");
const errores = [errorNombre, errorMail, errorMsg];

//decalrando banderas para confirmar cuando el documento estaria listo para ser "enviado"
flags = [false, false, false];

//cargando todos los elementos <p> creados anteriormente a la ulForm a traves del metodo appendChild()
errores.forEach((aux, i) => {
    aux.classList.add("error-message");
    ulForm.children[i].appendChild(aux);
})



//creacion del evento subtit del formulario
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

    //comprobando que las banderas esten todas en verdaderos para poder "mandar el formulario"
    if (flags[0] && flags[1] && flags[2]) {
        //removiendo la clase "hiiden" que mantenia oculto el div dnd se mostrara la informacion cargada en el formulario
        confirmContainer.classList.remove("hidden");
        //creacion de una ul dnd colocaremos las listas con   los datos del formulario
        const ulMessage= document.createElement("ul");
        //agregando el elemento ul en el div
        confirmContainer.appendChild(ulMessage);
        //agregando el elemento li en la ul previamente creada
        ulMessage.appendChild(document.createElement("li")).innerHTML = inpNombre.value +"&nbsp"
        //condicional para q solo intente cargar el email si este campo no esta vacio
        if(inpMail.value.length > 0) {
            ulMessage.appendChild(document.createElement("li")).innerHTML = "&nbsp"+"("+inpMail.value+")"+"&nbsp"
        }
        ulMessage.appendChild(document.createElement("li")).innerHTML = "&nbsp"+"dice"+"&nbsp" + txtMsg.value
        ulMessage.appendChild(document.createElement("br"))
         //setiando valores a default
        inpNombre.value ="";
        inpMail.value ="";
        txtMsg.value ="";
        txtMsg.classList.remove("correct-border");
        inpNombre.classList.remove("correct-border");
        inpMail.classList.remove("correct-border");



    }

})