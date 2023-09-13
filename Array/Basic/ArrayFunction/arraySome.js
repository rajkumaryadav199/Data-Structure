
function fnIsEven_some(arr) {
    return arr.some(function (element) {
        return (element % 2 === 0);
    });
}
 
console.log(fnIsEven_some([1, 3, 5]));
console.log(fnIsEven_some([1, 3, 5, 6]));

let array=[1,2,3]
array.some((ele)=>
{console.log(ele)})

array.some((ele)=>
{if(ele>1){
    console.log(ele)
}})