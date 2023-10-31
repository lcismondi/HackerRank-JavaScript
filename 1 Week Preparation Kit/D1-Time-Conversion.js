//Explicación: https://www.youtube.com/watch?v=KQp2COZelMw

let hour = [0];
hour = s.split(':')

if(s.includes('PM'))
{
    if(Number(hour[0])==12){
        hour[0] = Number(hour[0]);
    }
    else{
        hour[0] = Number(hour[0])+12;
    }
    console.log(hour[0]+':'+hour[1]+':'+hour[2].split('PM')[0]);
    return(hour[0]+':'+hour[1]+':'+hour[2].split('PM')[0]);
}
else{
    hour[0] = Number(hour[0]);
    if(hour[0]==12){
        hour[0] = hour[0]-12;
    }
    if(hour[0]<10)
    {
        hour[0] = '0'+hour[0];
    }
    console.log(hour[0]+':'+hour[1]+':'+hour[2].split('AM')[0]);
    return(hour[0]+':'+hour[1]+':'+hour[2].split('AM')[0]); 
}
