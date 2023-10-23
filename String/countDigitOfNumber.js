/* count digit of number*/

function CountDigit(str){
    let count=0;
    str = Math.abs(str);
    /* Method-1 */ 
    // do{
    //     count++;
    //   str = Math.floor(str / 10);
    //   console.log(str)
    // }
    // while(str > 0)
    // {
    //     return count;
    // }
    /*Method -2*/
    str = str.toString()

    for(let i=0 ; i<str.length;  i++){
        count++;
    }
    return count
}
console.log(CountDigit(-1234))