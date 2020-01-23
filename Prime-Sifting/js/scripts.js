function getPrimes(limit){
  var primes = [];
  if(limit <=7){
    if (limit===2){
      primes.push(2);
    }
    //Broken need to fix below 4
    else if(limit===3 || limit === 4){
      primes.push(2);
      primes.push(3);
    }
    if(limit===5 || limit <7){
      primes.push(2);
      primes.push(3);
      primes.push(5);
    }
    if(limit===7){
      primes.push(2);
      primes.push(3);
      primes.push(5);
      primes.push(7);
    }
  }
  //error may be here too
  for(var i = 2; i<= limit; i++){
    if(i % 2 === 0){

    }
    else if(i % 3 === 0){

    }
    else if(i % 5 === 0){

    }
    else if(i % 7 === 0){

    }
    else{
      primes.push(i);
    }
  }
  return primes;
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var inputLimit = parseInt($("#limit").val());
    var primeArray = getPrimes(inputLimit);
    console.log(primeArray);
  });
});