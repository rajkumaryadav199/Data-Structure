/*Sum of natural number from 1 to n*/

function SumOfNatural(n){
    let sum =0;
    for(let i= 1; i<=n; i++)
    {
        sum +=i
    }
    return sum
}
console.log(SumOfNatural(5))