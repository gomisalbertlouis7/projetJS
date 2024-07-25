function sommeTableau(tableau) {
    let somme = tableau.reduce(function(acc, valeur) {
        return acc + valeur;
    }, 0); 

    return somme;
}

let tableau2 = [14, 27, 39, 70, 540];
let resultat2 = sommeTableau(tableau2);
console.log("La somme des éléments du tableau est :", resultat2); 