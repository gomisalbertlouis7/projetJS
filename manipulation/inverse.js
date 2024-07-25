function inverseChaine(chaine) {
    let chaineInverse = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
        chaineInverse += chaine[i];
    }
    return chaineInverse;
}

console.log(inverseChaine('albert'));