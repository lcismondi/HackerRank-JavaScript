'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here

let abc = 'abcdefghijklmnopqrstuvwxyz';
let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let resp = new String();

console.log(s.length);

    for(let i = 0; i < s.length; i++)
    {
    //minusculas
     if(abc.indexOf(s[i]) >= 0){
         
         resp = resp + abc[(abc.indexOf(s[i])+k)%abc.length];
         
     }
     //mayusculas
     else if(ABC.indexOf(s[i]) >= 0){
         
         resp = resp + ABC[(ABC.indexOf(s[i])+k)%ABC.length];
         
     }
     //simbolos
     else{
         resp= resp + s[i];
     }
        
        
    }



return resp;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
