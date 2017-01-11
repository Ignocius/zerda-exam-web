'use strict';

var test = require('tape');
var validator = require('./validate')

test('first test', function(t) {
  let actual = (true);
  let expected = true;
  t.equal(actual, expected);
  t.end();
});


test('validate a good email', function (t) {
  t.equal(validator('almaaad adjasj remarkable, spectacular, outstanding asdkjlaskjdé', 'alma@email.com', 15), true);
  t.end();
})

test('validate an empty mail with keywords', function (t) {
  t.equal(validator('almaaad adjasj, spectacular, outstanding asdkjlaskjdé', '', 15), false);
  t.end();
})

test('validator rejects valid email, a scale of 9 and positive feedback', function (t) {
  t.equal(validator('almaaad adjasj, spectacular, outstanding asdkjlaskjdé', 'alma@email.com', 9), false);
  t.end();
})

test("validator accepts valid email, a scale of 15 and positive feedback");
test("validator rejects unfilled email, a scale of 15 and positive feedback");
test("validator rejects valid email, a scale of 9 and positive feedback");
