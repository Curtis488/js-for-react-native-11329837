function createUserProfie(originalNames,modifiedNames) {
    if (!Array.isArray(originalNames) || !Array.isArray.isArray(modifiedNames)) {
        throw new Error("Both inputs must be arrays");
    }
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must be of the the same leng");
    }
    return originalNames.map((name,index) =>{
        return{
            id: index + 1,
            originalNames: name,
            modifiedNames: modifiedNames[index]
        };
    });
  }