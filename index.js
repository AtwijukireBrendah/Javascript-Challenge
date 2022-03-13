this is in capstone
 




/*let firstName = 'Brendah';
let secondName ='Atwijukire';
        console.log(firstName + ' '+  secondName );
             

let x = 'blue';
let y = 10;
if(x>y){
    console.log('You are right');
}
else if(x<y) {
   console.log('You are wrong');
}
else{
    console.log('The two cant be compared');

   
let firstName = 'Brendah';
let secondName ='Atwijukire';
name = firstName + ' '+  secondName
        console.log(name );





function fizzBuzz() = 'firstName' + 'secondName'


        }
let age = 50;

if (age <= 18){
console.log('Thank you for subscribing to the minor program');
}
else if (18<=36 ) {
    console.log('Thank you for subscribing to the youth program');
}
else{
    console.log('Thank you for subscribing to the elders program');


}
*/


let someArray = [3.0,'a',7,'x','20','d',4,'f',8]

if (x % 2 ===0){
console.log('These are even numbers');
}
else if (x % 2 ===1 ) {
    console.log('These are odd numbers');
}
else{
    console.log('These are characters');


}



function splitArray(numbers) {
    let odd = [];
    let even = [];
    let char =[];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        // number is even
        even.push(numbers[i]);
      }
      else if(numbers[i] % 2 === 1 ) {
        // number is not even (=odd)
        odd.push(numbers[i]);
      }
      else{
        // number is not even/odd(char)
        char.push(numbers[i]);
           }
      }
    }
  
    // create an object with the odd and even array in it
    const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
}

  console.log(splitOddAndEven([1, 2, 3]));
// { odd: [ 1, 3 ], even: [ 2 ] }

console.log(splitOddAndEven([0, 3, 5]));
// { odd: [ 3, 5 ], even: [ 0 ] }

