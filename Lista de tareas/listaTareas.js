const tareas = [];

function agregarTarea(){
    
    const input = document.getElementById("tarea");
    const nombreTarea = input.value;

    if(nombreTarea.trim() !== ""){
        const nuevaTarea = {
            nombre: nombreTarea,
            completada: false
        }
        tareas.push(nuevaTarea);
    }

    actualizar();
    input.value = "";
}

function actualizar(){

    const contenedor = document.querySelector("ul");
    contenedor.innerHTML = "";

    tareas.forEach((tarea, indice) => {
        const nuevaLista = document.createElement("li");

        const boton = document.createElement("img");
        boton.src = "imagenes/zafacon.png";
        
        boton.onclick = ((event) => {
            event.stopPropagation();
            eliminarTarea(indice);
        });

        const div = document.createElement("div");

        div.classList.add("divEliminar");

        nuevaLista.textContent = tarea.nombre;

        if (tarea.completada) {
            nuevaLista.classList.add("completada");
        }

        nuevaLista.addEventListener("click", () => {
          tareaCompletada(indice);
        });

        // boton.addEventListener("click", (event) => {
        //     event.stopPropagation();
        //     eliminarTarea(indice);
        // });

        contenedor.appendChild(nuevaLista);
        nuevaLista.appendChild(div);
        div.appendChild(boton);
    });
}

function tareaCompletada(indice){
    tareas[indice].completada = !tareas[indice].completada;
    actualizar();
}



function eliminarTarea(indice){
    tareas.splice(indice, 1);
    actualizar();
}


// const botonAgregar = document.getElementById("boton");
// botonAgregar.addEventListener("click", agregarTarea);
