/* sum of digit of number*/

function SumOfDigitOfNumber(num)
{
    let sum=0
    while(num>0)
    {
        sum +=num%10;
        num =Math.floor(num/10)
    }
    return sum;
}

console.log(SumOfDigitOfNumber(1234))