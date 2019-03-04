module.exports = function getZerosCount(number, base) {
  const factors = factorize(base);
  var results = [];
  for (let [factor, factorPower] of factors) {
    var exponent = 1;
    var poweredFactor = factor;
    var count = 0;

    while (poweredFactor <= number) {
      count = count + Math.floor(number / poweredFactor);
      exponent++;
      var poweredFactor = Math.pow(factor, exponent);
    }

    count = Math.floor(count / factorPower);
    results.push(count);
  }
  return Math.min.apply(Math, results);
}

function factorize(number) {
  var result = new Map();
  for (let i = 2; i <= number ; i++) {
    if (isSimple(i)) {
      while (number % i == 0) {
        number = number / i;
        if (result.has(i)) {
          result.set(i, result.get(i) + 1);
        } else {
          result.set(i, 1);
        }
      }
    }
  }
  return result;
}

function isSimple(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
