export function addTask() {
    let olTodo = document.getElementById("olToDo");
    let olProgress = document.getElementById("olProgress");
    let olDone = document.getElementById("olDone");
    let inputTask = document.getElementById("tache");
    let addTaskBut = document.getElementById("addTask");

    addTaskBut.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        let taskName = inputTask.value;
        if (taskName.trim() === "") {
            alert("Veuillez entrer une tâche.");
            return;
        }

        let newTask = createTaskElement(taskName, olProgress);
        olTodo.appendChild(newTask);

        // Réinitialiser l'input après l'ajout de la tâche
        inputTask.value = "";
    });
}

// Fonction pour créer un élément de tâche avec une checkbox personnalisée
function createTaskElement(taskName, olProgress) {
    let newTask = document.createElement('li');

    // Créer la div contenant la checkbox personnalisée
    let checkboxWrapper = document.createElement('div');
    checkboxWrapper.className = "checkbox-wrapper-61";

    let newTaskCheck = document.createElement('input');
    newTaskCheck.type = "checkbox";
    newTaskCheck.className = "check";
    newTaskCheck.id = `check-${Date.now()}`; // ID unique pour chaque checkbox

    let label = document.createElement('label');
    label.setAttribute("for", newTaskCheck.id);
    label.className = "label";
    label.innerHTML = `
        <svg width="45" height="45" viewbox="0 0 95 95">
            <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
            <g transform="translate(0,-952.36222)">
                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="blue" stroke-width="3" fill="none" class="path1" />
            </g>
        </svg>
    `;

    checkboxWrapper.appendChild(newTaskCheck);
    checkboxWrapper.appendChild(label);
    newTask.appendChild(checkboxWrapper);

    let newTaskP = document.createElement('p');
    let TextNewTask = document.createTextNode(taskName);
    newTaskP.appendChild(TextNewTask);
    newTask.appendChild(newTaskP);

    // Écouteur sur la checkbox pour déplacer la tâche dans "In Progress"
    newTaskCheck.addEventListener("click", () => {
        setTimeout(() => {
            let newTaskProgress = createTaskElement(taskName, olDone); 
            olProgress.appendChild(newTaskProgress);
            newTask.remove(); // Supprimer la tâche de la liste "To Do"
        }, 1200); // Délai de 6 secondes
    });    

    return newTask;
}
