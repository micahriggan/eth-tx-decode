const util = require('util');
const AbiDecoder = require('abi-decoder');
const FakeTransaction = require('ethereumjs-tx').FakeTransaction;
const erc20 = require('./erc20.json');
const invoice = require('./invoice.json');
const raw = process.argv[2];
console.log("DECODING", raw);
const tx = new FakeTransaction(raw)
try { 
console.log('FROM: 0x' + tx.from.toString('hex'));
console.log('TO:   0x' + tx.to.toString('hex'));
} catch (e) {
  console.log("**TX NOT SIGNED**");
}
const nonce =  parseInt(tx.nonce.toString('hex') || '0', 16) || 0;
const value =  parseInt(tx.value.toString('hex') || '0', 16) || 0;
const gasPrice = parseInt(tx.gasPrice.toString('hex'), 16) || 0; 
const gasLimit = parseInt(tx.gasLimit.toString('hex'), 16) || 0;

const fee = gasPrice * gasLimit;

console.log('NONCE: ', nonce);
console.log('VALUE: ', value);
console.log('GAS PRICE: ', gasPrice);
console.log('GAS TOTAL: ', gasLimit);
console.log('FEE', fee);
console.log('ETH REQUIRED: ', value + fee)


const data = tx.data.toString('hex');
if(data) {
  console.log('============================');
  console.log('======DATA DECODE==========');
  AbiDecoder.addABI(erc20);
  AbiDecoder.addABI(invoice);
  const decodedData = AbiDecoder.decodeMethod('0x' + data);
  console.log(JSON.stringify(decodedData, null, 2));
}

