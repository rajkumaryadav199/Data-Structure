/*Find dublicate character in string */

let str='ABCDCBDCWXW'

let myset=new Set()

for(i of str)
{
    myset.add(i)
}

let newSet=new Set()
for(i of str)
{
    if(newSet.has(i)===false)
    {
        newSet.add(i)
     
    }
    else {
        console.log(i)
    }
}