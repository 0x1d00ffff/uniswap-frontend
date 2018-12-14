# Uniswap Frontend
This an an open source interface for Uniswap - a protocol for decentralized exchange of Ethereum tokens.

This is a fork of the [standard Uniswap frontend](https://github.com/Uniswap/uniswap-frontend) which supports 0xBitcoin. It runs at [0xbitcoin.trade](https://0xbitcoin.trade/). 

* Website: [uniswap.io/](https://uniswap.io/)
* Docs: [docs.uniswap.io/](https://docs.uniswap.io/)
* Twitter: [@UniswapExchange](https://twitter.com/UniswapExchange)
* Reddit: [/r/Uniswap/](https://www.reddit.com/r/UniSwap/)
* Email: [contact@uniswap.io](mailto:contact@uniswap.io)
* Slack: [uni-swap.slack.com/](https://join.slack.com/t/uni-swap/shared_invite/enQtNDYwMjg1ODc5ODA4LWEyYmU0OGU1ZGQ3NjE4YzhmNzcxMDAyM2ExNzNkZjZjZjcxYTkwNzU0MGE3M2JkNzMxOTA2MzE2ZWM0YWQwNjU)
* Whitepaper: [Link](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)


### To Start Development

###### Installing dependency
```bash
yarn
```

###### Running locally on Rinkeby
```bash
yarn start:rinkeby
```

###### Running locally on other testnet
```bash
REACT_APP_NETWORK_ID=2 REACT_APP_NETWORK='Ropsten Test Network' react-scripts start
```

###### Running locally
```bash
npm run start
```

###### Build for github pages
```bash
git checkout master
npm run deploy
```

### Contributions
Please open all pull requests against `dev` branch.
