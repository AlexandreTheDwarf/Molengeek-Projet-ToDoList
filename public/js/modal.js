export function initModal() {
    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    let ButtonTask = document.getElementById("ButtonTask");

    // Get the <span> element that closes the modal
    let modalClose = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    ButtonTask.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    modalClose.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
