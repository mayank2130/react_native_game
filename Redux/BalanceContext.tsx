// BalanceContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface BalanceContextProps {
  balance: number;
  increaseBalance: (amount: number) => void;
  deductBalance: (amount: number) => void;
}

interface BalanceProviderProps {
  children: ReactNode;
}

const BalanceContext = createContext<BalanceContextProps | undefined>(
  undefined
);

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
};

export const BalanceProvider: React.FC<BalanceProviderProps> = ({
  children,
}) => {
  const [balance, setBalance] = useState<number>(10000); // Initial balance

  const deductBalance = (amount: number) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  const increaseBalance = (amount: number) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const contextValue: BalanceContextProps = {
    balance,
    deductBalance,
    increaseBalance
  };

  return (
    <BalanceContext.Provider value={contextValue}>
      {children}
    </BalanceContext.Provider>
  );
};
