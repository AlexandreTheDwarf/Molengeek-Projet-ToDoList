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

        // Vérifier si une liste dépasse déjà 5 éléments
        if (olTodo.children.length >= 5) {
            alert("Trop de tâches dans la liste 'To Do'. Terminez-en avant d'en ajouter d'autres.");
            return;
        }
        

        // Si aucune liste n'a dépassé 5 éléments, créer la nouvelle tâche
        let newTask = createTaskToDo(taskName, olTodo);
        olTodo.appendChild(newTask);

        // Réinitialiser l'input après l'ajout de la tâche
        inputTask.value = "";
    });
}

function createTaskToDo(taskName, olTodo) {
    let newTask = document.createElement('li');
    let checkboxWrapper = createCheckboxWrapper(taskName, 'ToDo', newTask);
    newTask.appendChild(checkboxWrapper);

    let newTaskP = document.createElement('p');
    let TextNewTask = document.createTextNode(taskName);
    newTaskP.setAttribute("contenteditable" , "true");
    newTaskP.appendChild(TextNewTask);
    newTask.appendChild(newTaskP);

    // Bouton de suppression
    let deleteButton = createDeleteButton(newTask, olTodo);
    newTask.appendChild(deleteButton);

    // Écouteur sur la checkbox pour déplacer la tâche dans "In Progress"
    newTask.querySelector('input').addEventListener("click", () => {
        setTimeout(() => {
            if (olProgress.children.length >= 5) {
                alert("Trop de tâches dans la liste 'In Progress'. Terminez-en avant d'en ajouter d'autres.");
                newTask.querySelector('input').checked = false; // Décoche la checkbox
                return;
            }
            let newTaskInProgress = createTaskInProgress(taskName, newTaskP);
            olTodo.removeChild(newTask);
            olProgress.appendChild(newTaskInProgress);
        }, 1200);
    });

    return newTask;
}

function createTaskInProgress(taskName, newTaskP) {
    
    let newProgressTask = document.createElement('li');
    let checkboxWrapper = createCheckboxWrapper(taskName, 'InProgress', newProgressTask);
    newProgressTask.appendChild(checkboxWrapper);

    let newProgressTaskP = document.createElement('p');
    let TextNewProgressTask = document.createTextNode(newTaskP.textContent);
    newProgressTaskP.setAttribute("contenteditable" , "true");
    newProgressTaskP.appendChild(TextNewProgressTask);
    newProgressTask.appendChild(newProgressTaskP);

    // Bouton de suppression
    let deleteButton = createDeleteButton(newProgressTask, olProgress);
    newProgressTask.appendChild(deleteButton);

    // Écouteur sur la checkbox pour déplacer la tâche dans "Done"
    newProgressTask.querySelector('input').addEventListener("click", () => {
        setTimeout(() => {
            if (olDone.children.length >= 5) {
                alert("Trop de tâches dans la liste 'Done'. Supprimez-en avant d'en ajouter d'autres.");
                newProgressTask.querySelector('input').checked = false; // Décoche la checkbox
                return;
            }
            let newTaskDone = createTaskDone(taskName, newProgressTaskP);
            olProgress.removeChild(newProgressTask);
            olDone.appendChild(newTaskDone);
        }, 1200);
    });

    return newProgressTask;
}

function createTaskDone(taskName, newProgressTaskP) {
    let newDoneTask = document.createElement('li');
    let checkboxWrapper = createCheckboxWrapper(taskName, 'Done', newDoneTask);
    newDoneTask.appendChild(checkboxWrapper);

    let newDoneTaskP = document.createElement('p');
    let TextNewDoneTask = document.createTextNode(newProgressTaskP.textContent);
    newDoneTaskP.appendChild(TextNewDoneTask);
    newDoneTask.appendChild(newDoneTaskP);

    // Modifier le comportement de la tâche une fois dans "Done"
    let checkbox = newDoneTask.querySelector('input');
    checkbox.checked = true;
    checkbox.disabled = true;  // Désactiver la checkbox
    newDoneTask.querySelector('p').style.textDecoration = "line-through";  // Barrer le texte

    // Bouton de suppression
    let deleteButton = createDeleteButton(newDoneTask, olDone);
    newDoneTask.appendChild(deleteButton);

    return newDoneTask;
}

// Fonction pour créer le bouton "Supprimer"
function createDeleteButton(taskElement, listElement) {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Supprimer";
    deleteButton.className = "delete-button";

    // Écouteur pour supprimer la tâche
    deleteButton.addEventListener("click", () => {
        listElement.removeChild(taskElement);
    });

    return deleteButton;
}

function createCheckboxWrapper(taskName, section, newTask) {
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
    
    return checkboxWrapper;
}
