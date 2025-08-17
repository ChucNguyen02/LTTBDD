
Array.prototype.myFilter = function(callback) {
  let result = []; 

  for (let i = 0; i < this.length; i++) {

    if (callback(this[i])) {
      result.push(this[i]); 
    }
  }

  return result;
};


const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.myFilter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
