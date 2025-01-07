export function filter(){
    let filterAll = document.getElementById("filter-all");
    let filterTodo = document.getElementById("filter-todo");
    let filterProgress = document.getElementById("filter-progress");
    let filterDone = document.getElementById("filter-done");

    let SheetTodo = document.getElementById("SheetTodo");
    let SheetProgress = document.getElementById("SheetProgress")
    let SheetDone = document.getElementById("SheetDone")

    filterAll.addEventListener("click", () => {
        SheetTodo.classList.remove("hidden");
        SheetProgress.classList.remove("hidden");
        SheetDone.classList.remove("hidden");
    })

    filterTodo.addEventListener("click", () => {
        SheetTodo.classList.remove("hidden");
        SheetProgress.classList.add("hidden");
        SheetDone.classList.add("hidden");
    })

    filterProgress.addEventListener("click", () => {
        SheetTodo.classList.add("hidden");
        SheetProgress.classList.remove("hidden");
        SheetDone.classList.add("hidden");
    })

    filterDone.addEventListener("click", () => {
        SheetTodo.classList.add("hidden");
        SheetProgress.classList.add("hidden");
        SheetDone.classList.remove("hidden");
    })
}