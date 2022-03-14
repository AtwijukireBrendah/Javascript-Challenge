
function fizzBuzz(){
 
    
    let x = prompt("Insert first string")
    let y = prompt("Insert second string")

    if((x+y).length%3==0 && (x+y).length%5==0) {
        console.log('FizzBuzz');
    }  
else if((x+y).length%3==0){
        console.log('Fizz');
    }   
else if((x+y).length%5==0) {    
    console.log('Buzz');
}
else{
    console.log('Combined length not divisible by neither 3 nor 5');
}
}

fizzBuzz()








   












