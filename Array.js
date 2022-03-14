
function sortArray(){

let someArray = [3.0,'a',7,'x','20','d',4,'f',8];
let odds = [];
let evens =[];
let chars =[];

const returnObject = {
  evens,
  odds,
  chars,
}

    for(i=0; i<someArray.length;i++){
      if (someArray[i] % 2 ===0 ){
      evens.push(someArray[i]);
      }
      else if (someArray[i] % 2 ===1 ) {
      odds.push(someArray[i]);
      }
      else{
      chars.push(someArray[i]);
      }
    }
  
console.log(returnObject)  // to show object values in console window

return returnObject;

}

sortArray()















  
  