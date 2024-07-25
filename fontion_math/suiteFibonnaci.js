function fibonaci(n) {
     let fibSequence = [0, 1];
 
     for (let i = 2; i <= n; i++) {
         fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
     }
 
     return fibSequence.slice(0, n + 1);
 }
 console.log(fibonaci(10000));