const Web3 = require('web3');
const rpc = 'https://ropsten.infura.io/v3/4723644fef534b01b9fbf52d7eb2fc1e';
const web3 = new Web3(rpc);

var data = {};

web3.eth.getBlock(5874014, function(err, res) { 
 	data.parentHash = res.hash;
});


web3.eth.getBlock(5874015, function(err, res) { 
  //data.parentHash = res.parentHash;
  data.timestamp = res.timestamp;
  var answerHash = web3.sha3([res.parentHash.slice(2), res.timestamp.toString(16).padStart(64, "0")].join(''), {encoding: 'hex'})
  data.answer = parseInt(answerHash.slice(-2), 16);
  console.log(data);
});