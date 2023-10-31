//Explicación: https://www.youtube.com/watch?v=QSr8NToTQ44

  let positive = 0;
  let negative = 0;
  let zero = 0;
  let total = 0;
  
  arr.map(function(x){
     
     if(x > 0){
         positive++;
         total++;
     }
     else if( x < 0){
         negative++;
         total++;
     }
     else{
         zero++;
         total++;
     }
  });
  
  console.log(Number.parseFloat(positive/total).toFixed(6));
  console.log(Number.parseFloat(negative/total).toFixed(6));
  console.log(Number.parseFloat(zero/total).toFixed(6));

