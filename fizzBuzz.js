
function fizzBuzz(string1,string2){
    

   let stringLength= string1.length + string2.length

    if(stringLength%3===0 && stringLength%5===0) {
        return'FizzBuzz';
    }  
else if(stringLength%3===0){
        return 'Fizz';
    }   
else if(stringLength%5===0) {    
        return 'Buzz';
}
else{
    return 'Combined length not divisible by neither 3 nor 5';
}
}

fizzBuzz("Brendah","Atwijukire")








   












