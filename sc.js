//  WAP to print Nth prime number.(Input: 5, Output: 11, since 11 is the 5th prime number)

let n = parseInt(prompt('Enter the number'))

for (let i = 1; i <= n; i++) {
    
    if (checkPrime(i)) {
        console.log(i);
    }
}

function checkPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            
            return false;
        }
   }

    return true;
}

//  WAP to print Nth prime number.(Input: 5, Output: 11, since 11 is the 5th prime number)

//function nthPrime ()
       // {
         //   var num = document.getElementById('inputdata').value;
         //   let i, primes = [2, 3],
         //       n = 5;
         //   const isPrime = n => {
         //       let i = 1,
         //           p = primes[i],
         //           limit = Math.ceil(Math.sqrt(n));
         //       while (p <= limit) {
         //           if (n % p === 0) {
         //               return fal//se;
         //           }
         //           i += 1;
          //          p = primes[i];
         //       }
          //      return true;
          //  }
          //  for (i = 2; i <= num; i += 1) {
          //      while (!isPrime(n)) {
          //          n += 2;
           //     }
           //     primes.push(n);
           //     n += 2;
           // }
           // document.getElementById('Answer').innerText =  primes[num - 1];
        //}