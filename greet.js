const Web3 = require('web3')
const path = require('path')


const web3 = new Web3("http://127.0.0.1:5000")
const account = web3.eth.accounts.create()

const contractAddress = "0x60A6a849000C7a8aFC36088abAbE5013b647397D" //Address taken from deploy function
const greeterContract = new web3.eth.Contract(require(path.join(process.cwd(), "abi.json")), contractAddress)

greeterContract.methods.set("Hello from Hyperledger Fabric!").send({from: account.address})
    .then((result) => {
        console.log(result)

        greeterContract.methods.greet().call({from: account.address}) //Call to greet function
            .then((result) => console.log(result))
    })