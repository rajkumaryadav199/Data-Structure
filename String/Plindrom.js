
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

console.log(isPalindrom('12221'))