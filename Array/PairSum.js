/* https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true */

/* Given an array of integers i and j a positive integer , determine the number of  pairs where i<j and arr[i] +arr[j]  is divisible by k .*/

let ar=[1,2,3,4,5,6]
let k=5

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count =0;
    for(let i=0; i<n; i++)
    {
        for(let j=i+1; j<n; j++)
        {
            let ans=ar[i]+ar[j];
            if(ans%k===0)
            {
              count++  
            }
        }
    }
    return count;

}