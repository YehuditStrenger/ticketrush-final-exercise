# Code review: Noa's refund calculation

`node tests/run.js` fails both refund tests. `calcRefund()` applies the 90% refund rate to the ticket price plus the service fee, but the service fee is not refundable. One ticket returns 325.8 instead of 315, and two tickets return 651.6 instead of 630. Calculate the refund from the ticket price only; do not merge this branch until the calculation is fixed and the tests pass.
