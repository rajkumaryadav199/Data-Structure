/* Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids. */

let arr=[1,1,2,2,3,4,5]
function migratoryBirds(arr) {
    // Write your code here
    let obj={};
    for( let i=0; i<arr.length ; i++)
    {
        
        if(obj[arr[i]]==undefined)
        {
           obj[arr[i]]=1; 
        }
        else{
            obj[arr[i]]++;
        }
    }

  let ans=0;
  let max=0;
  for(let k in obj)
  {
      if(obj[k]>max)
      {
          ans=k
          max=obj[k]
      }
  }
 
  return ans;
}