function MissingNum(arr){
arr=arr.sort((a,b)=>{return(a-b)})
for(let i=1;i<arr.length; i++){
    if(arr[i-1]+1 !=arr[i])
    {
        return arr[i]-1;
    }
}
}

console.log(MissingNum([3,0,1]))