//Explicación: https://www.youtube.com/watch?v=KNj0L_Rqp7Q&list=PLtBH4_wmOeN-4JYqSSfzMlGJ2Kadwrwun&index=3

//console.log(matrix);

let n = matrix.length/2;
//console.log(n);
let maxim = 0;

for(let i = 0; i < n; i++ )
{
  for(let j = 0; j < n; j++)
  {
  
    let mirror = [];
    mirror.push(matrix[i][j]);
    mirror.push(matrix[i][2*n-j-1]);
    mirror.push(matrix[2*n-i-1][j]);
    mirror.push(matrix[2*n-i-1][2*n-j-1]);
    
    //console.log(mirror);
    
    //maxim += Math.max(mirror);
    
    let acc = 0;
    
    console.log();
    
    for(let k = 0; k < mirror.length; k++)
    {
      console.log(mirror[k]);
      if(acc < mirror[k])
      {
        acc = mirror[k];
        console.log(k);
      }
    
    }
    
    maxim += acc;
  
  }
}

console.log(maxim);

return maxim;
