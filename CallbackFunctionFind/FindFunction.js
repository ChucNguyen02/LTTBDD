Array.prototype.myFind = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i]; 
    }
  }
  return undefined; 
};


const numbers = [1, 3, 5, 8, 10];

let firstEven = numbers.myFind(c => c % 2 === 0);
console.log(firstEven);