//Explicación: https://www.youtube.com/watch?v=RryU0WYkpcI

  var size = arr.length;
  var all = [];
  arr.forEach((el, i) => {
      var t = 0;
      for (var j = 0; j < size; j ++)
          if (i != j)
              t += arr[j];
      all.push(t);
  })
  console.log(Math.min(...all), Math.max(...all));
