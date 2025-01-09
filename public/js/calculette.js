export function calculette() {

    console.log("calculette.js est bien chargé");

    // Selecteur

        // NumPad

            // Nombre

            let CalcZero = document.getElementById("CalcZero")
            let CalcUn = document.getElementById("CalcUn")
            let CalcDeux = document.getElementById("CalcDeux")
            let CalcTrois = document.getElementById("CalcTrois")
            let CalcQuatre = document.getElementById("CalcQuatre")
            let CalcCinq = document.getElementById("CalcCinq")
            let CalcSix = document.getElementById("CalcSix")
            let CalcSept = document.getElementById("CalcSept")
            let CalcHuit = document.getElementById("CalcHuit")
            let CalcNeuf = document.getElementById("CalcNeuf")

            // Signe

            let CalcPlus = document.getElementById("CalcPlus")
            let CalcMoins = document.getElementById("CalcMoins")
            let CalcDiviser = document.getElementById("CalcDiviser")
            let CalcFois = document.getElementById("CalcFois")
            let CalcEgal = document.getElementById("CalcEgal")

            // Divers

            let CalcVirgule = document.getElementById("CalcVirgule")
            let CalcDel = document.getElementById("CalcDel")
            let CalcBackspace = document.getElementById("CalcBackspace")
            let CalcDelAll = document.getElementById("CalcDelAll")

        // HTML 

            let ResultOne = document.getElementById("ResultOne")
            let ResultTwo = document.getElementById("ResultTwo")
            let DivSign = document.getElementById("Sign")

    // Function

        let result1 = ""
        let result2 = ""
        let operation = ""

        let sign = ""

        function affichage(result1, result2, sign){
            ResultOne.textContent = result1
            ResultTwo.textContent = result2
            DivSign.textContent = sign
        }

        function resetAction(type) {
            switch(type) {
                case "result2":
                    result2 = ""; // Réinitialise result2
                    break;
                case "backspace":
                    result2 = result2.substring(0, result2.length - 1); // Supprime le dernier caractère de result1
                    break;
                case "all":
                    result1 = ""; // Réinitialise result1
                    result2 = ""; // Réinitialise result2
                    sign = ""; // Réinitialise le signe
                    break;
                default:
                    console.warn("Action non définie");
                    return;
            }
            affichage(result1, result2, sign); // Mets à jour l'affichage après l'action
        }   
         

        function calcul() {
            switch (sign) {
                case "+":
                    operation = result1 + " " + sign + " " + result2
                    result1 = (parseFloat(result1) + parseFloat(result2)).toString();
                    break;
                case "-":
                    operation = result1 + " " + sign + " " + result2
                    result1 = (parseFloat(result1) - parseFloat(result2)).toString();
                    break;
                case "*":
                    operation = result1 + " " + sign + " " + result2
                    result1 = (parseFloat(result1) * parseFloat(result2)).toString();
                    break;
                case "/":
                    if (parseFloat(result2) != 0) {
                        operation = result1 + " " + sign + " " + result2
                        result1 = (parseFloat(parseFloat(result1) / parseFloat(result2))).toString();
                    } else {
                        alert("Impossible de diviser un nombre par zéro !");
                        resetAction("all");
                        return;
                    }
                    break;
            }
            affichage(result1, result2, sign);
        }        

        function inputNum(input) {
            result2 += input.textContent; // On ajoute le chiffre à result2
            affichage(result1, result2, sign);
        }

        function inputVirgule(input){
            if (result2 == "" || result2.includes(".")){
                return;
            }
            else{
                result2 += "."; // Remplacer la virgule par un point
                affichage(result1, result2, sign);
            }
        }
        
        function inputSign(input) {
            if (result2 !== "") {
                if (sign !== "") {
                    calcul(); // Effectue l'opération si un signe est déjà présent
                } else {
                    result1 = result2; // Si aucun signe encore, on transfère result2 dans result1
                }
                result2 = ""; // Réinitialisation de result2
            }
        
            sign = input.textContent; // Met à jour le nouveau signe
            affichage(result1, result2, sign);
        }        
                  
        let prevSign = "";  // Signe de la dernière opération
        let prevResult2 = ""; // Dernier nombre utilisé pour l’opération
        let prevResult1 = "";

        function inputEqual() {
            if (sign !== "" && result2 !== "") {
                // Effectue le calcul actuel
                calcul();
        
                // Mise à jour de l'affichage avec l'opération complète
                affichage(operation, result1, "=");
        
                // Mémorise le signe et le result2 pour les prochaines répétitions
                prevSign = sign;
                prevResult2 = result2;
                prevResult1 = result1;
        
                // Réinitialise le signe pour éviter une répétition infinie
                sign = ""; 
                result2 = ""; // Réinitialiser result2 après l'égal
            } 
            else if (prevSign !== "" && prevResult2 !== "") {
                // Répète la dernière opération si on reclique sur "="
                result1 = prevResult1;  // Récupère le dernier result1
                result2 = prevResult2;  // Récupère le dernier result2
                sign = prevSign;  // Récupère le dernier signe
        
                // Effectue de nouveau le calcul avec les anciennes valeurs
                calcul();
        
                // Mise à jour de l'affichage
                affichage(operation, result1, "=");
        
                // Réinitialise le signe pour la prochaine opération
                sign = ""; 
                result2 = ""; // Réinitialiser result2 pour que l'utilisateur entre un nouveau nombre
            }
        }        
        
        // Listener :

            // Listener pour les chiffres
            CalcZero.addEventListener("click", () => inputNum(CalcZero));
            CalcUn.addEventListener("click", () => inputNum(CalcUn));
            CalcDeux.addEventListener("click", () => inputNum(CalcDeux));
            CalcTrois.addEventListener("click", () => inputNum(CalcTrois));
            CalcQuatre.addEventListener("click", () => inputNum(CalcQuatre));
            CalcCinq.addEventListener("click", () => inputNum(CalcCinq));
            CalcSix.addEventListener("click", () => inputNum(CalcSix));
            CalcSept.addEventListener("click", () => inputNum(CalcSept));
            CalcHuit.addEventListener("click", () => inputNum(CalcHuit));
            CalcNeuf.addEventListener("click", () => inputNum(CalcNeuf));


            // Listener pour les opérateurs
            CalcPlus.addEventListener("click", () => inputSign(CalcPlus));
            CalcMoins.addEventListener("click", () => inputSign(CalcMoins));
            CalcFois.addEventListener("click", () => inputSign(CalcFois));
            CalcDiviser.addEventListener("click", () => inputSign(CalcDiviser));

            // Listener pour la virgule

            CalcVirgule.addEventListener("click", () => inputVirgule(CalcVirgule));

            // Listener pour le bouton égal
            CalcEgal.addEventListener("click", inputEqual);

            // Delete :

            CalcDel.addEventListener("click", () => {
                resetAction("result2"); // Réinitialise result2
            });

            CalcDelAll.addEventListener("click", () => {
                resetAction("all"); // Réinitialise tout
            });

            CalcBackspace.addEventListener("click", () => {
                resetAction("backspace"); // Supprime le dernier caractère de result1
            });

}
