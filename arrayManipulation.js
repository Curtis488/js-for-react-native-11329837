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

     function formatArrayStrings(stringArray,numberArray) {
        if (!Array.isArray(stringArray)|| !Array.isArray(numberArray)) {
            throw new Error("Both inputs must be arrays");
        }
        if (stringArray.length !==numberArray.length){
            throw new Error("Both arrays must be of the same lenght");
        }
        return stringArray.map((str,index)=> {
            const num = 
            numberArray[index];
            if (typeof str !== 'string' || typeof num !== 'number') {
                throw new Error("String array must contain strings and number array must contain number");
            }
            return num % 2 === 0 ? 
            str.toUpperCase():
            str.toLowerCase();
        });
    };