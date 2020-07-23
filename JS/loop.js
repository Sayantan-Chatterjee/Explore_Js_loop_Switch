'use strict';
//For Loop
console.log('for loop starting with value 0')
for(let x=0; x<10; x++)
{
    console.log(x);
}
//while loop

console.log('While loop starting with value 10')
let x=10;
while(x>0){
    console.log(x--);
}

//do-while loop

console.log('do-while loop-->')

 let y=0;

 do{
      console.log(y++)
 }while(y<27);

//Switch Case
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
  default:
     day = "unknown";
}

console.log('Today is: ' + day)