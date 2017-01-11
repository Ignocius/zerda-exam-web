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
  t.equal(decrypt()'alma'), 'alma');
  t.end();
})

test('decrypt alma with 1', function (t) {
  t.equal(decrypt(1, 'zold'), 'ynkc');
  t.end();
})

test("validator accepts valid email, a scale of 15 and positive feedback");
test("validator rejects unfilled email, a scale of 15 and positive feedback");
test("validator rejects valid email, a scale of 9 and positive feedback");
