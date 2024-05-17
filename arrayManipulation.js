function processArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("input must be an array");
    }
     return arr.map(num =>{
         if (typeof num !== 'number')
         {
            throw new Error("All elements in the array must be numbers");
         }
         return num % 2 === 0 ? num ** 2 : num * 3;
     })};