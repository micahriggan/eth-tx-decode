const EthereumTx = require('ethereumjs-tx');
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
