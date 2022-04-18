const uniswap = require("@uniswap/sdk")

const chainID = uniswap.ChainId.RINKEBY;
const tokenAddress = "0x7922b545851cfbFb7efE94a456e70900aa548092";

const init = async () => {
    const coin = await uniswap.Fetcher.fetchTokenData(chainID, tokenAddress);
    //const coin = new uniswap.Token(chainID, tokenAddress, 18, 'A', 'Avatar');
    console.log(coin)
    //console.log(acoin)
    const weth = uniswap.WETH[chainID];
    const pair = await uniswap.Fetcher.fetchPairData(coin, weth);
    const route = new uniswap.Route([pair], weth);
    console.log(route.midPrice.toSignificant(6));
    console.log(route.midPrice.invert().toSignificant(6));
    }

init();