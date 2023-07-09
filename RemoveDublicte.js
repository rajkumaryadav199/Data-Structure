/* Remove all dublicate from the strings*/
let str='ABCDCBDCWXW'  /* ABCDW*/

let myset=new Set()

for(let i=0; i<str.length; i++)
{
    myset.add(str[i])
}
console.log(myset)

for(k of myset)
{
    console.log(k)
}

