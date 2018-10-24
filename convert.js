const convert = require('convert-units');
console.log('Units to Convert\n' + convert().possibilities() + '\n');
if(isNaN(process.argv[2]) || process.argv[4] != "to"){
    console.log('Invalid');
}
else{
    console.log('Convert:\n' + process.argv[2] + ' ' + process.argv[3] + ' ' + process.argv[4] + ' ' + process.argv[5]);
    console.log('New Value: ' + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]));
}