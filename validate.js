'use strict';
// create a separate file for the input validation module
// the validator function should return true if:
// the email has an @ sign
// AND the scale is equal to or bigger than 10
// AND the feedback text contains at least 3 nice words from the following list: ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"]
// the validator function should return false otherwise
// use an array method to process the feedback
// write unit tests for the cases in test.js found in this repository
// write 3 more test cases

module.exports =
function validateEmail (input, email, num) {
  let feedback = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];
  let scale = parseInt(num);
  // let stringInp = [input];
  var foundWordsCount = 0;
  let isGoodWInInsCount= false;
  let isEmailSign = false;
  let scaleValid = false;
  let valid = false;

  for(let w in feedback) {
  	var word = feedback[w];
  	console.log(input)
    // console.log(input.indexOf(word));
  	if(input.indexOf(word) != -1) {
      foundWordsCount++;
      console.log(foundWordsCount);
      if (foundWordsCount >= 3) {
        isGoodWInInsCount = true;
        foundWordsCount = 0;
      }
  	}
  }
  // console.log(foundWordsCount);

  if (scale === 10 || scale > 10) {
    scaleValid = true;
  };

  for (var i = 0; i < email.length; i++) {
      if (email[i] === '@') {
        isEmailSign = true;
      }
  };
  // console.log(isGoodWInInsCount, isEmailSign, scaleValid);

  if ( isGoodWInInsCount && isEmailSign && scaleValid) {
    valid = true;
  }
  // console.log(valid);
  return valid;
};

// console.log(validateEmail('almaaad adjasj remarkable, spectacular, outstanding asdkjlaskjdé', 'alma@email.com', 10));
