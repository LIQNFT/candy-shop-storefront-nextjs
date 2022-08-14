import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import * as anchor from '@project-serum/anchor';

// interface ProviderProps {
//     children: React.ReactNode
// }
const BalanceContext = createContext(null);

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST;
const connection = new anchor.web3.Connection(rpcHost);

export default function useWalletBalance() {
  const { balance, walletPubKey, walletAddress } = useContext(BalanceContext);
  return { balance, walletPubKey, walletAddress };
}
// type WalletProviderProps = {
//   children: React.ReactNode; // 👈️ added type for children
// };

export const WalletBalanceProvider = ({ children }) => {
  const wallet = useWallet();
  const [balance, setBalance] = useState(0);
  const [walletPubKey, setWalletPubKey] = useState({});
  const [walletAddress, setWalletAddress] = useState('');

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    };
  }, [wallet]);

  const refreshWallet = async () => {
    if (!anchorWallet) {
      setBalance(0);
      setWalletAddress('');
      setWalletPubKey({});
      return;
    }

    try {
      const balance = await connection.getBalance(anchorWallet.publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
      setWalletPubKey(anchorWallet.publicKey);
      setWalletAddress(anchorWallet.publicKey.toBase58());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    refreshWallet();
  }, [anchorWallet, balance, walletAddress]);

  return (
    <BalanceContext.Provider value={{ balance, walletPubKey, walletAddress }}>
      {children}
    </BalanceContext.Provider>
  );
};
