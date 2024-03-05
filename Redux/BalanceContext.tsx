// BalanceContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [balance, setBalance] = useState<number>(0);

  // Load balance from AsyncStorage on component mount
  useEffect(() => {
    const loadBalance = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem("balance");
        if (storedBalance !== null) {
          setBalance(parseFloat(storedBalance));
        }
      } catch (error) {
        console.error("Error loading balance from AsyncStorage:", error);
      }
    };

    loadBalance();
  }, []);

  const deductBalance = (amount: number) => {
    setBalance((prevBalance) => {
      const newBalance = prevBalance - amount;
      saveBalanceToStorage(newBalance);
      return newBalance;
    });
  };

  const increaseBalance = (amount: number) => {
    setBalance((prevBalance) => {
      const newBalance = prevBalance + amount;
      saveBalanceToStorage(newBalance);
      return newBalance;
    });
  };

  const saveBalanceToStorage = async (newBalance: number) => {
    try {
      await AsyncStorage.setItem("balance", newBalance.toString());
    } catch (error) {
      console.error("Error saving balance to AsyncStorage:", error);
    }
  };

  const contextValue: BalanceContextProps = {
    balance,
    deductBalance,
    increaseBalance,
  };

  return (
    <BalanceContext.Provider value={contextValue}>
      {children}
    </BalanceContext.Provider>
  );
};
