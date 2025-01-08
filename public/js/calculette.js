export function calculette() {

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
            let CalcMinus = document.getElementById("CalcMinus")
            let CalcDiviser = document.getElementById("CalcDiviser")
            let CalcFois = document.getElementById("CalcFois")
            let CalcPourcent = document.getElementById("CalcPourcent")
            let CalcEgal = document.getElementById("CalcEgal")

            // Divers

            let CalcVirgule = document.getElementById("CalcVirgule")
            let CalcDel = document.getElementById("CalcDel")
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

        function reset(result2){
            result2 = ""
        }

        function resetAll(result1, result2, sign){
            result1 = ""
            result2 = ""
            sign = ""
        }

        function calcul(result1, result2, sign) {
            switch (sign) {
                case "+":
                    result1 = toString(parseFloat(result1) + parseFloat(result2))
                    result2 = ""
                    affichage(result1, result2, sign)
                    break;
                case "-":
                    result1 = toString(parseFloat(result1) - parseFloat(result2))
                    result2 = ""
                    affichage(result1, result2, sign)
                    break;
                case "*":
                    result1 = toString(parseFloat(result1) * parseFloat(result2))
                    result2 = ""
                    affichage(result1, result2, sign)
                    break;
                case "/":
                    if (parseFloat(result2)!=0){
                        result1 = toString(parseFloat(result1) / parseFloat(result2))
                        result2 = ""
                        affichage(result1, result2, sign)
                    }else{
                        alert("impossible de divier un nombre par zero")
                        // inserer function reset
                    }
                    break;
                case "%":
                    if (parseFloat(result2)!=0){
                        result1 = toString(parseFloat(result1) % parseFloat(result2))
                        result2 = ""
                        affichage(result1, result2, sign)
                    }else{
                        alert("impossible de divier un nombre par zero")
                        // inserer function reset
                    }
                    break;
                default:
                    break;
            }
        }

}
