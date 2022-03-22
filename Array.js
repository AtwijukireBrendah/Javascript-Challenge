
function sortArray(someArray){

//let someArray = [5.0,'a',7,'m','20','d',4,'f',8];
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

evens.sort((a, b) => a - b);
odds.sort((a, b) => a - b);
chars.sort((a, b) => a - b);

return returnObject;

}

sortArray([5.0,'a',7,'m','20','d',4,'f',8])















  
  