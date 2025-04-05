import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1> Holiwis</h1>
   <form id="task-form">
   <input type="text" id="task-input" placeholder="Escribe una tarea"/>
   <button id="add-task"  type="submit">Agregar</button>
   </form>

   <ul id="task-list">

   </ul>

  </div>

`
const taskInput = document.getElementById("task-input") as HTMLInputElement;
const taskForm = document.getElementById("task-form") as HTMLInputElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;
console.log(taskInput.value);

function addTask(Task:string){

  const taskItem = document.createElement("li");
  taskItem.textContent = Task;
  taskItem.style.listStyle = "none";
  taskItem.onclick = () => { taskItem.remove()}


  taskList.append(taskItem);
}

taskForm.addEventListener("submit",(e)=> {
  e.preventDefault();
  console.log(taskInput.value);
  if(taskInput.value.trim() !== ""){
  addTask(taskInput.value);
  }
  taskInput.value = "";
})