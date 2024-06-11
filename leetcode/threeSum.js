let array = [-1,0,1,2,-1,-4];
let ans = []
for (let i= 0; i<array.length; i++){
    let j=i+1
    let k=j+1
    while(k<array.length){
        if(array[i]+array[j]+array[k] === 0){
            let data = []
            data.push(array[i]);
            data.push(array[j]);
            data.push(array[k]);
            ans.push(data)
        }
        j++;
        k++;
    }
}
console.log(ans)