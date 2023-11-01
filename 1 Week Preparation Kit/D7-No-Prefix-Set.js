'use strict';

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


function insert (word, trie) {
    for (const [i, char] of word.split('').entries()) {
        if (char in trie) {
            // Existing entry
            if (trie[char]['is_end'] || i === word.length - 1) {
                return true
            } else {
                trie = trie[char]
            }
        } else {
            // New entry
            trie[char] = {}
            trie = trie[char]
        }   
    }
    
    trie['is_end'] = true
    return false
}

/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function noPrefix(words) {
    // Write your code here
    let trie = {}

    for (const word of words) {
        if (insert(word, trie)) {
            console.log('BAD SET')
            console.log(word)
            return
        }
    }
    
    console.log('GOOD SET')
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let words = [];

    for (let i = 0; i < n; i++) {
        const wordsItem = readLine();
        words.push(wordsItem);
    }

    noPrefix(words);
}
