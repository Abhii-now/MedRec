<h1>MedRec: One stop DAPP to Access Your Medical Records</h1>
<img width="1437" alt="image" src="https://user-images.githubusercontent.com/36236202/176426078-ad4ea690-cd2c-4691-b55f-6537d15dde1c.png">

<h3> The Proposal</h3>

Originally designed for keeping a ﬁnancial ledger, the blockchain paradigm can be extended to provide a generalized framework for implementing decentralized compute resources.
We utilize Ethereum’s smart contracts on the Ethereum Blockchain using solidity to create intelligent representations of medical records of a patient, these contracts will also contain metadata of the permission management.  
We utilize Ethereum’s Web3 framework internally, this allows our users to easily manage signed transactions and interactions with the Ethereum blockchain. 
We will use MetaMask which will eliminate the need for users to download full or even partial Ethereum blockchains on their local machines in order to broadcast transactions. This will also eliminate the need for using any external user identification, where we can use the user’s Metamask wallet address as his unique identification. 
To create the local blockchain we will utilize Ganache, it will also give us 9 wallet addresses with 1000 fake ethers, which we will use for testing purposes. 
We will also use truffle to compile the contracts locally. 
Finally, we are using React.js along with CSS and Bootstrap to create a frontend for our app 
We will use Web3.js so that our front end can interact with the Ethereum blockchain.  This library gives us a lot of functionality by which we can transform any simple web2 application into a web3 application.                                                                          

## How to Run Locally

### Software Requirements

- Node
- Ganache
- Truffle  
- Metamask Extension

### Start Local Blockchain

```
ganache
```

### Compile Contracts

```
truffle migrate 
cd utils 
node helper.js 
```

- Please verify each of deployed contract's address in Config/config.js is similar to that in build folder.

### Start Frontend

```
npm i
npm run start
```

## Tech Used

- React.js
- Web3.js
- Solidity
- Truffle
- Ganache
