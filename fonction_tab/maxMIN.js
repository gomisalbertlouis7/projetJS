function trouverMinMax(tableau) {
    if (tableau.length === 0) {
        return null;
    }

    let min = tableau[0];
    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return { min: min, max: max };
}

let monTableau = [99,23,54,6,7,123,54,678,75];
let resultats = trouverMinMax(monTableau);
console.log(resultats); 