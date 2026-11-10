const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('members receive a ticket discount without discounting the service fee', function () {
  assertEq(calcTotal(2, true), 584);
});
test('members may buy up to 6 tickets', function () { assertEq(maxTickets(true), 6); });
test('members cannot buy more than 6 tickets', function () { assertEq(calcTotal(7, true), null); });
test('rejects quantities below 1', function () { assertEq(calcTotal(0), null); });
test('rejects quantities over the regular limit', function () { assertEq(calcTotal(9), null); });
test('rejects fractional quantities', function () { assertEq(calcTotal(1.5), null); });
test('students receive a 15% ticket discount', function () { assertEq(calcTotal(2, false, true), 619); });
test('member and student discounts do not stack', function () { assertEq(calcTotal(2, true, true), 584); });
