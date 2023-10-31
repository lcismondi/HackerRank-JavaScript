//Explicación: https://www.youtube.com/watch?v=qh_U_Gcc1EQ&list=PLtBH4_wmOeN-4JYqSSfzMlGJ2Kadwrwun&index=22

let count = 0;

// Write your code here
for(let i = 0;i < a.length; i++){
    for(let j = 0; j < a.length; j++){
     if(a[i] == a[j])
     {
         count++;
     }
    }
    if(count == 1)
    {
        return a[i];
    }
    else{
        count = 0;
    }
}
