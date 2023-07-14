/*https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true*/
/*Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
example 
9
10 5 20 20 4 5 2 25 1 
output
2 4
*/
let scores=[10, 5, 20, 20, 4, 5, 2, 25, 1]
function breakingRecords(scores) {
    // Write your code here
    let min =scores[0];
    let max=scores[0]
    let countMin=0
    let countMax=0;
    for(let i=1; i<scores.length; i++)
    {
        if(scores[i]>max)
        {
            max=scores[i];
            countMax++;
        }
        if(scores[i]<min)
        {
            min=scores[i];
            countMin++;
        }
    }
    let result=[]
    result.push(countMax)
    result.push(countMin)
    return result
}