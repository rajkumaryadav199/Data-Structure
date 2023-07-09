/* Return the later whose maximum count in the strings*/

let str="ASCFCDFCCESC";

let obj={}

for(let i=0; i<str.length; i++)
{
    if(obj[str[i]]==undefined)
    {
      obj[str[i]] = 1
    }
    else{
        obj[str[i]]++
    }
}

let count=0;
for(k in obj)
{
    if(obj[k] >count)
    {
        count=obj[k]
    }
}
console.log("str", count)