function processData(input) {
    //Enter your code here
    
    let step = input.split('\n').splice(1).map(l=>l.split(' '));
    let n = step.length;
    let q = [];
    let paper = [];
    let index = [];
    
    //console.log(step[0][0]);
    
    for(let i = 0; i < n; i++)
    {
        //console.log(step[i][0]);
        switch (step[i][0]){
            
            //Append
            case "1":
            let a = step[i][1].split("");
            for(let j = 0; j < a.length; j++)
            {
                q.push(a[j]);
                
            }
            index.push(i);
            break;
            
            //Deleted
            case "2":
            
            for(let k = 0; k < step[i][1]; k++)
            {
                paper.push(q.pop());
                
            }
            index.push(i);
            break;
            
            //Print
            case "3":
            
            console.log(q[step[i][1]-1]);
            
            break;
            
            //Undo
            case "4":
            //console.log(index);
            let prev = index.pop();

            //Revierte agregado
            if(step[prev][0] == "1")
            {
                let a = step[prev][1].split("");
                for(let j = 0; j < a.length; j++)
                {
                    q.pop();
                }
            }
            //Revierte borrado
            else if(step[prev][0] == 2)
            {
                for(let k = 0; k < step[prev][1]; k++)
                {
                    q.push(paper.pop());
                }
            }
            
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
