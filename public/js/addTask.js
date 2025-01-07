export function addTask() {
    let olTodo = document.getElementById("olToDo");
    let olProgress = document.getElementById("olProgress");
    let inputTask = document.getElementById("tache");
    let addTaskBut = document.getElementById("addTask");

    addTaskBut.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        let taskName = inputTask.value;
        if (taskName.trim() === "") {
            alert("Veuillez entrer une tâche.");
            return;
        }

        let newTask = document.createElement('li');

        let newTaskCheck = document.createElement('input');
        newTaskCheck.type = "checkbox";
        newTaskCheck.name = "TaskToDoCheck";
        newTaskCheck.value = "";
        newTask.appendChild(newTaskCheck);

        newTaskCheck.addEventListener("click", () => {
            let newTaskProgress = document.createElement("li")
            let newTaskProgressTxt = document.createTextNode(newTaskCheck.nextElementSibling.textContent)

            let newTaskProgressCheck = document.createElement('input');
            newTaskProgressCheck.type = "checkbox";
            newTaskProgressCheck.name = "TaskProgressCheck";
            newTaskProgressCheck.value = "";

            newTaskProgress.appendChild(newTaskCheck);
            newTaskProgress.appendChild(newTaskProgressTxt)
            olProgress.appendChild(newTaskProgress)
            
            newTask.remove()
        })

        let newTaskP = document.createElement('p');
        let TextNewTask = document.createTextNode(taskName);
        newTaskP.appendChild(TextNewTask);
        newTask.appendChild(newTaskP);
        olTodo.appendChild(newTask);

        // Réinitialiser l'input après l'ajout de la tâche
        inputTask.value = "";
    });
}

