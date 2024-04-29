function calculate(operation) {

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {

        result = "Veuillez entrer deux valeurs numériques.";

    } else {
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'subtract') {
            result = num1 - num2;
        } else if (operation === 'multiply') {
            result = num1 * num2;
        } else if (operation === 'divide') {
            if (num2 === 0) {
                result = "Impossible de diviser par zéro.";
            } else {
                result = num1 / num2;
            }
        } else {
            
            result = "Opération non valide";
        }
    }

    document.getElementById("result").innerText = "Résultat : " + result;
}

