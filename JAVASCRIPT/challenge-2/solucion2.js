function AGREGARTAREA(){
    const tarea = document.getElementById("input_tarea");
    const lista = document.getElementById("lista_tarea");
    const error = document.getElementById("error")
    let valortarea = tarea.value;

    if( valortarea.trim() != "" ){
    const li = document.createElement("li");
    li.textContent = tarea.value;
    lista.append(li);
    console.log(li);
    li.onclick = function(){
        this.remove();
    }
    error.innerText = "";
    }else{
        error.innerText = "Ingrese una tarea.";
    }
    tarea.value = null;
}