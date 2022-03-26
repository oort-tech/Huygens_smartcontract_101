### Install
Go to the source directory and open terminal, please run this command.<br>
> npm install
### Compile
> npx hardhat compile
### Config
Rename .env.example to .env and open it, then fill the mainnet/rinkeby url and account's private key.<br>
> MAINNET_END_POINT=Your mainnet infra url<br>
> MAINNET_PRIVATE_KEY=Your mainnet account's private key for deployment<br>
> RINKEBY_END_POINT=Your rinkeby infra url<br>
> RINKEBY_PRIVATE_KEY=Your rinkeby account's private key for deployment<br>
> ETHERSCAN_API_KEY=You etherscan api<br>

### Test
> npx hardhat test test/test.js

### Deploy on Mainnet
> npx hardhat run scripts/deploy.js --network mainnet<br>

### Deploy on Rinkeby
> npx hardhat run scripts/deploy_test.js --network rinkeby<br>

Once deployed, you can see the Bridge contract's address on terminal.<br>
**Save the Bridge contract's address and use it.**
