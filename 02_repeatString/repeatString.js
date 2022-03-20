const repeatString = function(str,num) {
    if (num < 0)
    {
        return "ERROR";
    }
    else
    {
        let strToReturn = "";
        for (num; num > 0;num--)
        {
            strToReturn += str;
        }
        return strToReturn;
    }
};

// Do not edit below this line
module.exports = repeatString;
