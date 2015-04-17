var fs = require('fs');
var path = require('path');

var acorn = require('acorn');
var stringifyObject = require('stringify-object');

var INPUT_PATH = './code.js';
var OUTPUT_PATH = './result.js';

console.log('Reading input file:\n> ' + path.resolve(INPUT_PATH));
fs.readFile(INPUT_PATH, function (err, result) {
  if (err) { return console.error(err); }
  
  console.log('\nParsing source code');
  var ast = acorn.parse(result);
  var astStr = stringifyObject(ast, { indent: '  ' }) + '\n';
  
  console.log('\nWriting result:\n> ' + path.resolve(OUTPUT_PATH));
  fs.writeFile(OUTPUT_PATH, astStr, function (err) {
    if (err) { return console.error(err); }
    console.log('\nSucceeded');
  });
});