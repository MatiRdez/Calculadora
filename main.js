const display = document.querySelector(".display"); // Obtengo la pantalla
const botones = document.querySelectorAll(".boton"); // Obtengo los botones

let expresionEnCurso = ""; // Almacena la expresión en curso

botones.forEach(boton => { // Creando función para calculadora
    boton.addEventListener("click", () => { // Eventos al clickear los botones
        const botonPresionado = boton.textContent;

        if(botonPresionado === "C"){
            display.textContent = "0";
            expresionEnCurso = ""; // Reiniciar la expresión
        }else if(botonPresionado === "←"){
            if(display.textContent.length === 1){
                display.textContent = "0";
                expresionEnCurso = "";
            }else{
                display.textContent = display.textContent.slice(0, -1);
                expresionEnCurso = expresionEnCurso.slice(0, -1);
            }
        }else if(botonPresionado === "="){
            try{
                display.textContent = eval(expresionEnCurso);
                expresionEnCurso = display.textContent; // Actualizar la expresión
            }catch{
                display.textContent = "Error";
                alert("Por favor, ingrese una operación matemática válida.");
                expresionEnCurso = "";
            }
        }else if(botonPresionado === "√"){ // Funcionamiento de la raíz
            if (!expresionEnCurso.includes("Math.sqrt(")){
                display.textContent = `${expresionEnCurso}√(`;
                expresionEnCurso += "Math.sqrt(";
            }
        }else if(botonPresionado === "^"){ // Funcionamiento de la potencia
            display.textContent += "^";
            expresionEnCurso += "**"; // Utilizamos "**" en lugar de "^" para representar la potencia en JavaScript
        }else if(display.textContent === "0" || display.textContent === "Error"){
            display.textContent = botonPresionado;
            expresionEnCurso = botonPresionado;
        }else{
            display.textContent += botonPresionado;
            expresionEnCurso += botonPresionado;
        }
    });
});