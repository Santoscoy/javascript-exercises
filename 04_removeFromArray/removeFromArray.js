const removeFromArray = function(array,itemToRemove) {
let modifiedArray = [];
for (let item of array)
{   
    
    if(item === itemToRemove)
    {
        continue;
    }
    else
    {
        modifiedArray.push(item);
    }
}
return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
