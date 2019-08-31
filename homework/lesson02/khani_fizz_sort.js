function  printnum (env)
{
    return function (a,b){
        let var1 =1;
        while (var1<=env ) {
            if (var1 % a==0 & var1 % b==0) {
                console.log(var1 + '_fizz-bazz');
            }
            else if (var1 % b==0) {
                console.log(var1 +'_buzz');

            }
            else if (var1%a==0)
            {
                console.log(var1 + '_fizz');
            }
            else
                console.log(var1);
            var1 ++;
        }
    }
}
const func1=printnum(100);
func1(3,5);







function findMaxMin(arrayList) {

    var  sortedArr=   arrayList.sort(function (a,b) { return a-b });

    let max =sortedArr[sortedArr.length -1 ];
    let min = sortedArr[0];

    return `max = ${max}   min = ${min}`;
};

console.log( findMaxMin([1, 400, 500, 115, 44, 600]))
console.log()

