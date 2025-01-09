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

        function calcul(resetSign = true) {
            switch (sign) {
                case "+":
                    result1 = (parseFloat(result1) + parseFloat(result2)).toString();
                    break;
                case "-":
                    result1 = (parseFloat(result1) - parseFloat(result2)).toString();
                    break;
                case "*":
                    result1 = (parseFloat(result1) * parseFloat(result2)).toString();
                    break;
                case "/":
                    if (parseFloat(result2) != 0) {
                        result1 = ((parseFloat(result1) / parseFloat(result2)).toFixed(2)).toString();
                    } else {
                        alert("Impossible de diviser un nombre par zéro !");
                        resetAction("all");
                        return;
                    }
                    break;
                case "=":  
                    result2 = parseFloat(result1).toFixed(2); // Mettre le résultat final dans result2
                    result1 = result2; // Afficher seulement le résultat dans result1
                    sign = "="; // Afficher "=" comme signe
                    break;
                
            }
            
            if (resetSign) {
                sign = ""; // Réinitialiser le signe
                result2 = ""; // Réinitialiser result2
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
                    calcul(); // On effectue le calcul en attente avant d’ajouter le nouveau signe
                } else {
                    result1 = result2; // Si aucun calcul, on transfère result2 vers result1
                }
                result2 = ""; // Réinitialisation de result2 pour la saisie suivante
            }
            sign = input.textContent; // On stocke le nouveau signe
            affichage(result1, result2, sign);
        }
        
        
        function inputEqual() {
            if (sign !== "" && result2 !== "" && result1 !== "") {
                // Effectuer le calcul en utilisant la fonction calcul
                calcul(false); // On garde le signe et ne réinitialise pas result2 ici
        
                // Maintenant on met à jour result1 avec l'expression complète
                result1 = result1 + " = "; // Ajoute " = " à la fin de l'expression
                result2 = parseFloat(result1); // Met le résultat du calcul dans result2
        
                // Affiche l'expression et le résultat final
                affichage(result1, result2, "=");
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
