Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};


const numbers = [1, 3, 5, 7];

const hasEven = numbers.mySome(num => num % 2 === 0);

console.log(hasEven); // false