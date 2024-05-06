
function checkAnagram(x, y){
    let myset= new Set(x);
    let flag = 'YES';

    for(let i = 0; i<y.length; i++){

        if(!myset.has(y[i])){
            flag = 'NO'
        }
    };

    return flag
}

function isAnagram(x, y){
    let arr1=x.split('').sort();
    let arr2=y.split('').sort();
    console.log("array", arr1,arr2);
    if(arr1.length != arr2.length){
        return 'No';
    }
    for(let i =0; i<arr1.length; i++){
        if(arr1[i]!=arr2[i]){
            return 'No';
        }
    }
    return 'Yes';
}




console.log(isAnagram("abcd", "bdca"))