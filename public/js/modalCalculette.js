export function openModal() {
    // Get the modal
    let modal = document.getElementById("ModalCalculette");

    // Get the button that opens the modal
    let ButtonOpCalc = document.getElementById("OpenCalculette");

    // Get the <span> element that closes the modal
    let modalClose = document.getElementsByClassName("close")[1];

    // When the user clicks on the button, open the modal
    ButtonOpCalc.onclick = function() {
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