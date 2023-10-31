//Explicación: https://youtu.be/GrCRd-1MQa0?si=jDXMuq7VlhO0J-j4

let size = arr.length;

console.log(size);

arr.sort(function (a, b) {
return a - b;});

console.log(arr);

console.log((size-1)/2);

return arr[(size-1)/2];
