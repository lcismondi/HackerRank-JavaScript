//Explicación: https://www.youtube.com/watch?v=8k2QfgDUeTc&list=PLtBH4_wmOeN-4JYqSSfzMlGJ2Kadwrwun&index=18

let left = 0;
let right = 0;
//console.log(arr.length);
for(let i = 0; i < arr.length; i++ )
{
    left = left + arr[0+i][0+i];
    //console.log(left);
    right = right + arr[0+i][arr.length-i-1];
    console.log(right);
}

return Math.abs(left-right);
