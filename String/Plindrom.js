
function isPalindrom(str)
{
let flag=true;
let i=0;
while(i<str.length/2)
{
    if(str[i]!=str[str.length-i-1])
    {
        return false;
    }
    i++;
}
return true;
}

function Palindrom(num){
    let copyNum =num;
    let reversNum=0;
    while(copyNum > 0)
    {
        const lastDigit=copyNum%10;
        reversNum = reversNum*10 + lastDigit;
        copyNum = Math.floor(copyNum/10);
    }
    console.log(copyNum, reversNum)
    return num == reversNum ;
}

console.log(Palindrom("12521"))