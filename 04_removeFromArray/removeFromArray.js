const removeFromArray = function() {
    let args =Array.from(arguments);
    let array = args[0];
    let argsToRemove = args.slice(1);
    let modifiedArray = [];
    for (let itemToRemove of argsToRemove)
    {   
            delete array[array.indexOf(itemToRemove)];
    }
       
    for (let item of array)
    {
        if(item != null)
            modifiedArray.push(item);
       
    }
    return modifiedArray;
};


// Do not edit below this line
module.exports = removeFromArray;