function filtrerTableau(tableau, condition) {
    
    let tableauFiltre = tableau.filter(condition);
    return tableauFiltre;
}
let tableau = [45, 30, 145, 80, 10,4];


let resultat1 = filtrerTableau(tableau, function(element) {
    return element > 15;
});
console.log("Éléments supérieurs à 15 :", resultat1); 

let resultat2 = filtrerTableau(tableau, function(element) {
    return element % 2 === 0;
});
console.log("Nombres pairs :", resultat2); 

let resultat3 = filtrerTableau(tableau, function(element) {
    return element < 10;
});
console.log("Éléments inférieurs à 10 :", resultat3); 
