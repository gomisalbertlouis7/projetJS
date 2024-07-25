function premier(n){
    if((n>=2 && n%2 === 0) || (n ===1) ){
        return "le nombre " +n+ " n'est pas premier";
    }
    else{
        return "le nombre " +n+ " est premier";
    }

}
console.log(premier(7));