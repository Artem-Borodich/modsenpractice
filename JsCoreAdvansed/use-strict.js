'use strict';

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript"));
console.log(countVowels("aeiou"));
console.log(countVowels("BCDFG"));