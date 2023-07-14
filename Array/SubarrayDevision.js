
let s=[2, 5, 1, 3 ,4, 4, 3, 5 ,1, 1, 2, 1, 4 ,1 ,3 ,3, 4, 2, 1]
let d=18;
let m=7
/* output= 18 7 */
console.log(birthday(s, d, m))
function birthday(s, d, m) {
    // Write your code here
    let sum=0; 
    let count =0
    for(let i=0; i<m; i++)
    {
       sum= sum+s[i] 
     
    }
    console.log('val',sum, m, d)
    if(sum===d)
        {
            count++
        }
        
    for(let k=m; k<s.length; k++)
    { 
        console.log(sum ,count,s[k],s[k-1])
        sum=sum+s[k]-s[k-1]
        
        if(sum===d)
        {
            count++
        }
        
    }
return count;
}