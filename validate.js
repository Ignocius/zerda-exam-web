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

module.exports = function validateEmail (input, email, num) {
  let feedback = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];
  let scale = parseInt(num);
  let stringInp = [input];
  let emailInp = [email];
  let counter = 0;
  let goodCount= false;
  let isEmailSign = false;
  let scaleValid = false;
  let valid = false;
  stringInp.forEach(function(word, index){
    if (word === feedback[index]) {
      counter ++;
      if (counter > 3) {
        goodCount = true;
        counter = 0;
      };
    }
  });
  if (scale === 10 || scale > 10) {
    scaleValid = true;
  };

  emailInp.forEach( function(word) {
    if (word === '@') {
      isEmailSign = true;
    }
  });

  if (goodCount && isEmailSign && scaleValid) {
    valid = true;
  }
  return valid;
};
