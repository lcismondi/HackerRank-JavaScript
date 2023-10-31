//Explicación: https://www.youtube.com/watch?v=eex_GDUzxdU
//Estructuras: https://www.geeksforgeeks.org/heap-data-structure


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


class MinHeap {
constructor() {
    this.arr = [];
}
left(i) {
    return 2 * i + 1;
}
right(i) {
    return 2 * i + 2;
}
parent(i) {
    return Math.floor((i - 1) / 2);
}
size() {
    return this.arr.length;
}
getMin() {
    return this.arr[0];
}
insert(k) {
    let arr = this.arr;
    arr.push(k);
    // Fix the min heap property if it is violated, HeapifyUp
    let i = arr.length - 1;
    // While newly pushed value is smaller than its parent node:
    while (i > 0 && arr[this.parent(i)] > arr[i]) {
        // Swap the new node and its parent node, then update i tobe its parent's index
        let p = this.parent(i);
        [arr[i], arr[p]] = [arr[p], arr[i]];
        i = p;
    }
}
extractMin() {
    let arr = this.arr;
    if (arr.length == 1) {
        return arr.pop();
    }
    // Store the minimum value, and remove it from heap
    let res = arr[0];
    arr[0] = arr[arr.length-1];
    arr.pop();
    // Reheapify the arr, HeapifyDown
    this.MinHeapify(0);
    return res;
}
// A recursive method to heapify a subtree with the root at given index
// This method assumes that the subtrees are already heapified
MinHeapify(i) {
    let arr = this.arr;
    let n = arr.length;
    // Base case:
    if (n === 1) {
        return;
    }
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    // Find the smallest item
    if (l < n && arr[l] < arr[i]) {
        smallest = l;
    }
    if (r < n && arr[r] < arr[smallest]) {
        smallest = r;
    }
    // If this node is not the smallest, swap it with the smallest, then HeapifyDown again
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
        this.MinHeapify(smallest);
    }
}
}




/*
* Complete the 'cookies' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
*  1. INTEGER k
*  2. INTEGER_ARRAY A
*/

function cookies(k, A) {
// Write your code here

const heap = new MinHeap();    

A.forEach((item) => {heap.insert(item);});

//console.log(heap);

let acc = 0;

//console.log(A);
//console.log(k);

A.sort((a,b)=>a-b);


//console.log(A[0]);
//console.log(k);

while(heap.getMin() < k){
    
    if(heap.size() >= 2)
    {
        let a = heap.extractMin();
        let b = heap.extractMin();
        
        //console.log(a);
        //console.log(b);
        
        heap.insert(a+2*b);
        acc++;
        //console.log(A);
        //A.sort((a,b)=>a-b);
    }
    else{
        return -1;
    }
    
}

return acc

}

function main() {
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

const n = parseInt(firstMultipleInput[0], 10);

const k = parseInt(firstMultipleInput[1], 10);

const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

const result = cookies(k, A);

ws.write(result + '\n');

ws.end();
}
