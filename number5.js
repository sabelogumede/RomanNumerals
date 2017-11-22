function getPlaceValues(number) {
    // this function takes a number of any length
    // and returns an array containing its place values

    var placeValues = [];
    var numberLength = Math.floor(Math.log10(number)) + 1;

    while (numberLength >= 1) {
	// decrement number length to repeat process
        // for next digit
        numberLength -= 1;
        // get the current place value, e.g. 10, 100, 1000 etc
        var currentPlace = Math.pow(10,numberLength);
        // get the current digit, e.g. 3 from 3291
        var currentDigit = Math.floor(number/currentPlace);
        // multiply by current place and push to array
        placeValues.push(currentDigit*currentPlace);
        // remove current place from number
        number %= currentPlace;
    }console.log(placeValues);
///*********************************

 

  var roman = [];

  var romanToNum = {
    
    9000:"MMMMMMMMM",8000:"MMMMMMMM",70000:"MMMMMMM",6000:"MMMMMM",5000:"MMMMM",4000:"MMMM",3000:"MMM",2000:"MM",1000:"M",900:"CM",800:"DCCC",700:"DCC",600:"DC",500:"D",400:"CD",300:"ccc",200:"CC",100:"C",90:"XC",80:"LXXX",70:"LXX",60:"LX",50:"L",40:"XL",30:"XXX",20:"XX",10:"X",9: "IX",8:"VII",7:"VII",6:"VI",5:"V",4:"IV",3:"III",2:"II",1:"I"
};

  for(var a = 0; a < placeValues.length; a++){
    
    roman.push(romanToNum[placeValues[a]]);
  
  }

//add array element together
               var results = "";
                for ( var i = 0; i < roman.length; i++ ){
                  results += roman[i];
                }

                      console.log(results);

    
    
}


getPlaceValues(2155);
