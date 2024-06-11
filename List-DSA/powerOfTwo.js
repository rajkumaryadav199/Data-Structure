
function isPowerOfTwo(n){

    while(n>1){
        n = n/2;
    }
    if(n===1){
        return 'Yes';
    }else{
       return "No";
    }
}

console.log(isPowerOfTwo(1024))