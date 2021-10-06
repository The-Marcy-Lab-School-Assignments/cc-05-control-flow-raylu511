//1
function absoluteValue(number){
  if(typeof(number)==="number"){
      if(number<0){
        return (-1*number);
        }
      return number;
  }
  return null;
}




//2 
function multiplesOfFourAndSix(){
    const multipleArray = [];
    for(let i=1; i<=100; i++){
        if(i%12===0){
            multipleArray.push(i);
        }
    }
    return multipleArray;
}



// console.log(absoluteValue(10.35))    //returns 10.35
// console.log(absoluteValue("hello"))  //returns null
// console.log(absoluteValue(-3))       //returns 3
// console.log(multiplesOfFourAndSix()) // returns [12, 24, 36, 48,60, 72, 84, 96]

