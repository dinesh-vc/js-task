  //Array 
  var arr = new Array();

  //recursive Function
  function range(m, n) {
      if (m <= n) {
          arr.push(m);
          return range(m + 1, n);
      }else{
          return arr;
      }

  }

  var a = prompt("Start");
  var b = prompt("Ends");

  document.write("Starting=" + a + "<br>");
  document.write("Ending=" + b + "<br>");
  
  if (+a > +b){
      let y=a;
      a=b;
      b=y;
  }
  
  range(+a, +b);
  document.write("Array Is =" + arr + " <br>");
  
  //new series
var sum=0;
var arr1=new Array();

  function newSeries(min , max)
  {
       sum=sum+min;
       arr1.push(sum); 

       if(min < max){
           return newSeries(min + 1, max);
       }

       return arr1;
  }
  newSeries(+a , +b)
  document.write("New Series =" + arr1 + "<br>");