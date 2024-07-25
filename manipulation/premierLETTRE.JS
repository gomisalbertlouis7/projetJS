function mettrePremiereLettreMajuscule(phrase) {
    let mots = phrase.split(" ");
    
    for (let i = 0; i < mots.length; i++) {

        let premiereLettreMaj = mots[i].charAt(0).toUpperCase();
        mots[i] = premiereLettreMaj + mots[i].slice(1).toLowerCase();
    }
    
    let phraseFinale = mots.join(" ");
    
    return phraseFinale;
}

let phrase = "bonjour albert louis gomis";
let phraseAvecPremiereLettreMaj = mettrePremiereLettreMajuscule(phrase);
console.log(phraseAvecPremiereLettreMaj); 