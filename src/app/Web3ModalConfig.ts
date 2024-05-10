import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, bsc } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet, bsc] as const
export const config = defaultWagmiConfig({
  
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})

export const ETHERSCAN_API_KEY = 'YGFA5EBB5SHB7J3XQQPTNA9HBJ8NKSKMA1';
export const BSCSCAN_API_KEY = '3J6SZZR8NAWSA1CW9RATDK3RWVNGVZY9QF';
export const coingeckoApiKey = 'CG-xeeevfyBU6ZDw41GzzEPYm1Y';
export const adminWallet = '0xbDbf0678c496d59b25bABFAead99F6a4cDc0F754';

export const networks = [
  1, 56
]