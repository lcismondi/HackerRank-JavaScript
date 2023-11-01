function processData(input) {
    //Enter your code here
    
    let operations = input.split('\n').splice(1).map(l=>l.split(' '));
    
    //console.log(input);
    
    let elements = []
    
    for (const [op, value] of operations){
      switch (op){
        case '1':
          elements.push(value)
        break;
        case '2':
          elements = elements.slice(1,elements.length)
        break;
        case '3':
          console.log(elements[0])
        break;
      }
    }
    
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
