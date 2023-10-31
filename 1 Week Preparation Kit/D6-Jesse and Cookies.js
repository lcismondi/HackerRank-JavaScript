//Explicación: https://www.youtube.com/watch?v=eex_GDUzxdU

let acc = 0;

//console.log(A);
//console.log(k);

A.sort((a,b)=>a-b);


//console.log(A[0]);
//console.log(k);

while(A[0] < k){
    
    if(A.length >= 2)
    {
        let a = A.shift();
        let b = A.shift();
        
        //console.log(a);
        //console.log(b);
        
        A.push(a+2*b);
        acc++;
        //console.log(A);
        A.sort((a,b)=>a-b);
    }
    else{
        return -1;
    }
    
}

return acc
