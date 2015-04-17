var _ = require('lodash');

var hello = 'Hello World!';
console.log(hello);

_.times(10, function (i) {
  if (i > 0) { process.stdout.write(', '); }
  process.stdout.write((i + 1) + '');
});

console.log('');