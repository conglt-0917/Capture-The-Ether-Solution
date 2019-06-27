const Web3 = require('web3');
const rpc = 'https://ropsten.infura.io/v3/4723644fef534b01b9fbf52d7eb2fc1e';
const web3 = new Web3(rpc);

const contractAddress = '';
const contractABI;

const contractInstance = new web3.eth.Contract(abi, contractAddress)

var data = {};

web3.eth.getBlock('latest', function(e, r) {
  var data = {number: r.blockNumber, hash: r.hash, timestamp: r.timestamp };
  var sha3 = web3.sha3([data.hash.slice(2), (data.timestamp + 14).toString(16).padStart(64, "0")].join(''), {encoding: 'hex'});
  data.answer = parseInt(sha3.slice(-2), 16);
  contractInstance.guess(data.answer, {value: 1000000000000000000}, function(x, v) { })
});