const Web3 = require('web3');
const rpc = 'https://ropsten.infura.io/v3/4723644fef534b01b9fbf52d7eb2fc1e';
const web3 = new Web3(rpc);


web3.eth.getStorageAt('0x40766010F9f98d76d2d2d28536b07821758Bf365', 0).then(result => {
  console.log(web3.utils.toDecimal(result));
});
