/*Remove the dublicate for other string*/

let str1="India is greate";
let Str= "India the greate"

let mySte=new Set()

for(l of str1)
{
    if(l !=" ")
    {
        mySte.add(l)
    }
}

let mySet1= new Set()
let ans=""
for(l of Str)
{
    if(l !=" " || mySte.has(l)==false)
    {
        ans =ans + l
    }
}

console.log(mySte, ans)

