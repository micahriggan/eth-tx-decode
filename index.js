const util = require('util');
const AbiDecoder = require('abi-decoder');
const EthereumTx = require('ethereumjs-tx');
const erc20 = require('./erc20.json');
const raw = '' 
const tx = new EthereumTx(raw)
console.log('FROM: 0x' + tx.from.toString('hex'));
console.log('TO:   0x' + tx.to.toString('hex'));
const value =  parseInt(tx.value.toString('hex') || '0', 16);
const gasPrice = parseInt(tx.gasPrice.toString('hex'), 16);
const gasLimit = parseInt(tx.gasLimit.toString('hex'), 16);
console.log('VALUE: ', value);
console.log('GAS PRICE: ', gasPrice);
console.log('GAS TOTAL: ', gasLimit);
console.log('ETH REQUIRED: ', value + gasPrice*gasLimit*10**-18 )


const data = tx.data.toString('hex');
if(data) {
  console.log('============================');
  console.log('======ERC20 DECODE==========');
  AbiDecoder.addABI(erc20);
  const decodedData = AbiDecoder.decodeMethod('0x' + data);
  console.log(decodedData);
}

