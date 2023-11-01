/*
* Complete the 'palindromeIndex' function below.
*
* The function is expected to return an INTEGER.
* The function accepts STRING s as parameter.
*/
function palindromeIndex(s) {
 // Write your code here
 let n = s.length;
 //console.log(n);
 //console.log(s2.splice(0,1));
//console.log(s2);
 //Falta condición inicial

 if(s.split("").join("") == s.split("").reverse().join("")){
 //console.log("Solución = " + -1);
 return -1;

 }
 else{
 for(let i = 0; i < n; i++){

 let s2 = s.split("");
 let z = s.split("").reverse();

 //console.log(s2.splice(i,1).join(""));
 //console.log(z.splice(s.length-1-i,1).join(""));

 s2.splice(i,1);
 z.splice(n-1-i,1);

 //console.log(s2.join(""));
 //console.log(z.join(""));

 let a = s2.join("");
 let b = z.join("");
 //console.log(a);
 //console.log(b);


 if(a == b){
 //console.log("Solución = " + i);
 return i;

 }
 else if(i == n-1)
 {
 //console.log("Solución = " + -1);
 return -1;
 }
 }
 }


 //console.log(z);
}
