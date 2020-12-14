function getEms(pixels){
  var emsValue = 16;

  function maths(){
    return pixels / emsValue;
  }
  return maths();
}

 var mediumEms = getEms(160); // It´s neccesary equals to a new variable 

 console.log(mediumEms);

