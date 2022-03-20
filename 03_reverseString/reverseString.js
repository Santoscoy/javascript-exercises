const reverseString = function(str) {
    let arrayOne = str.split("");
    arrayOne.reverse();
    let strOne = "";
    for (let item of arrayOne)
    {
        strOne += item;
    }
    return strOne;
};

// Do not edit below this line
module.exports = reverseString;
