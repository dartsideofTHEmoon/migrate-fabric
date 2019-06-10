const Web3 = require('web3')
const path = require('path')


const web3 = new Web3("http://127.0.0.1:5000")
const account = web3.eth.accounts.create()


const greeterContract = new web3.eth.Contract(require(path.join(process.cwd(), "abi.json")))

greeterContract.deploy({
    data: '0x608060405234801561001057600080fd5b506040805190810160405280601481526020017f48656c6c6f2066726f6d20657468657265756d210000000000000000000000008152506000908051906020019061005c929190610062565b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b61046f806101166000396000f3fe608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634ed3885e1461005c578063acb34ce814610124578063cfae3217146101b4575b600080fd5b34801561006857600080fd5b506101226004803603602081101561007f57600080fd5b810190808035906020019064010000000081111561009c57600080fd5b8201836020820111156100ae57600080fd5b803590602001918460018302840111640100000000831117156100d057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610244565b005b34801561013057600080fd5b5061013961025e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017957808201518184015260208101905061015e565b50505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c057600080fd5b506101c96102fc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102095780820151818401526020810190506101ee565b50505050905090810190601f1680156102365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b806000908051906020019061025a92919061039e565b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102f45780601f106102c9576101008083540402835291602001916102f4565b820191906000526020600020905b8154815290600101906020018083116102d757829003601f168201915b505050505081565b606060008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103945780601f1061036957610100808354040283529160200191610394565b820191906000526020600020905b81548152906001019060200180831161037757829003601f168201915b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103df57805160ff191683800117855561040d565b8280016001018555821561040d579182015b8281111561040c5782518255916020019190600101906103f1565b5b50905061041a919061041e565b5090565b61044091905b8082111561043c576000816000905550600101610424565b5090565b9056fea165627a7a72305820c59da971f7ba721ee42ccd78c887eafa32583cfcb5c67fb7f17abf996a713f8b0029'
}).send({
    from: account.address,
    gas: 1500000,
    gasPrice: "30000000000000",
    value: 0
}).on('error', (error) => {
    console.log(error)
}).then((newContractInstance) => {
    console.log(newContractInstance.options.address)
})

