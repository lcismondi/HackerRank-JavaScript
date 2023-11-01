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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here

let z = s.split("");
let n = z.length;
let q = [];

console.log(z);

if(n%2 != 0)
{
    return "NO"
}

for(let i = 0; i < n; i++)
{
    if(z[i] == "(" || z[i] == "[" || z[i] == "{")
    {
       q.push(z[i]); 
    }
    else if(z[i] != ")" && z[i] != "]" && z[i] != "}")
    {
        return "NO"
    }
    else
    {
        let close = q.pop();
        
        if(z[i] == ")" && close != "(")
        {
            return "NO"
        }
        else if(z[i] == "]" && close != "[")
        {
            return "NO"
        }
        else if(z[i] == "}" && close != "{")
        {
            return "NO"
        }
    }
}
if(q.length == 0)
{
    return "YES"
console.log(q);
}
else{
    
    return "NO"
    
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
