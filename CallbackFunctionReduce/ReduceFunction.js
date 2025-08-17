Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue; 

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator);
  }
  return accumulator; 
};

const numbers = [1, 2, 3, 4];

const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10