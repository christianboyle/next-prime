const args = process.argv
  .slice(2)
  .map((arg) => arg.split('='))
  .reduce((args, [value, key]) => {
    args[value] = key;
    return args;
  }, {});

const num = args.num;

const myFunction = (num) => {
  const isPrime = (num) => {
    if (num <= 1) {
      //console.log('prime');
      return true;
    } else if (num <= 3) {
      //console.log('prime');
      return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
      //console.log('not prime');
      return false;
    }

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        //console.log('not prime');
        return false;
      }
      i += 6;
    }

    //console.log('prime');
    return true;
  };

  const nextPrime = (num) => {
    if (isPrime(num)) {
      return true;
    } else {
      // console.log('not prime');

      while (!isPrime(num)) {
        ++num;
        //console.log(num);
        if (isPrime(num)) {
          return num;
        }
      }
    }
  };

  const solveIt = (num) => {
    if (isPrime(num)) {
      return `${num} is prime`;
    } else {
      return `${num} is not prime, next prime number is ${nextPrime(num)}`;
    }
  };

  const result = solveIt(num);
  console.log(result);
};

myFunction(num);
