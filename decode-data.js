const util = require('util');
const AbiDecoder = require('abi-decoder');
const FakeTransaction = require('ethereumjs-tx').FakeTransaction;
const erc20 = require('./erc20.json');
const invoice = require('./invoice.json');
const data = process.argv[2];
if(data) {
  console.log('============================');
  console.log('======DATA DECODE==========');
  AbiDecoder.addABI(erc20);
  AbiDecoder.addABI(invoice);
  const decodedData = AbiDecoder.decodeMethod('0x' + data);
  console.log(JSON.stringify(decodedData, null, 2));
}

