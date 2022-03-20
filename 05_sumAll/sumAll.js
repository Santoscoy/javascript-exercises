const sumAll = function(a,b) {
if(typeof a != "number" || typeof b != "number" || a < 0 || b < 0 )
{
    return "ERROR";
}
else
{
    let sum = 0;
    if (a < b)
    {
        for (a; a<= b ;a++)
        {
            sum += a;
        }
    }
    else if(a > b)
    {
        for(b ; b<= a ;b++)
        {
            sum+= b;
        }
    }
    return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
