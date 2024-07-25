function factorielle(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultat = 1;
        for (let i = 2; i <= n; i++) {
            resultat *= i;
        }
        return resultat;
    }
}
console.log(factorielle(1));