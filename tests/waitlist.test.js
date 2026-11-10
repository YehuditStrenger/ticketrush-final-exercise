const { joinWaitlist } = require('../js/waitlist');

test('trims and lowercases email addresses', function () {
  const result = joinWaitlist([], '  USER@Example.COM  ');
  assertEq(result[0], 'user@example.com');
});
test('returns a new array without mutating the input', function () {
  const list = ['first@example.com'];
  const result = joinWaitlist(list, 'second@example.com');
  assertEq(result === list, false);
  assertEq(list.length, 1);
  assertEq(result.length, 2);
});
test('does not add duplicates', function () {
  const result = joinWaitlist(['user@example.com'], ' USER@EXAMPLE.COM ');
  assertEq(result.length, 1);
});
test('ignores invalid email addresses', function () {
  assertEq(joinWaitlist(['first@example.com'], 'invalid').length, 1);
  assertEq(joinWaitlist(['first@example.com'], 'user@example').length, 1);
});
