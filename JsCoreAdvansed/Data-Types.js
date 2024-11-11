function sumFirstAndLastDigit(num) {
    const numStr = num.toString();
    const firstDigit = parseInt(numStr[0]);
    const lastDigit = parseInt(numStr[numStr.length - 1]);
    console.log(firstDigit + lastDigit);
  }
  sumFirstAndLastDigit(1234);