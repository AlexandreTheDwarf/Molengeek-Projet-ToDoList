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

        function calculette(result1, result2, sign) {
            switch (sign) {
                case "+":
                    result1 = toString(parseInt(result1) + parseInt(result2))
                    result2 = ""
                    break;
                case "-":
                    result1 = toString(parseInt(result1) - parseInt(result2))
                    result2 = ""
                    break;
                case "*":
                    result1 = toString(parseInt(result1) * parseInt(result2))
                    result2 = ""
                    break;
                case "/":
                    if (parseInt(result2)!=0){
                        result1 = toString(parseInt(result1) / parseInt(result2))
                        result2 = ""
                    }else{
                        alert("impossible de divier un nombre par zero")
                        // inserer function reset
                    }
                    break;
                case "%":
                    if (parseInt(result2)!=0){
                        result1 = toString(parseInt(result1) % parseInt(result2))
                        result2 = ""
                    }else{
                        alert("impossible de divier un nombre par zero")
                        // inserer function reset
                    }
                    break;
                default:
                    break;
            }
        }

        


        affichage(result1, result2, sign)
}
