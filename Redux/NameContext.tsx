// CompanyContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface CompanyContextProps {
  companyList: string[];
  updateCompanyList: (newCompany: string) => void;
  removeCompany: (company: string) => void;
  emptyCompanyList: () => void;
}

interface CompanyProviderProps {
  children: ReactNode;
}

const CompanyContext = createContext<CompanyContextProps | undefined>(
  undefined
);

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
};

export const CompanyProvider: React.FC<CompanyProviderProps> = ({
  children,
}) => {
  const [companyList, setCompanyList] = useState<string[]>([]);

  useEffect(() => {
    loadCompanyList(); // Call the loadCompanyList function when the component mounts
  }, []);

  const updateCompanyList = (newCompany: string) => {
    return new Promise<void>((resolve) => {
      setCompanyList((prevCompanyList) => {
        const updatedList = [...prevCompanyList, newCompany];
        saveCompanyListToStorage(updatedList);
        resolve();
        return updatedList;
      });
    });
  };

  const removeCompany = (company: string) => {
    setCompanyList((prevCompanyList) => {
      const updatedList = prevCompanyList.filter((c) => c !== company);
      saveCompanyListToStorage(updatedList);
      return updatedList;
    });
  };

  const emptyCompanyList = () => {
    setCompanyList([]);
    saveCompanyListToStorage([]);
  };

  const saveCompanyListToStorage = async (updatedList: string[]) => {
    try {
      await AsyncStorage.setItem("companyList", JSON.stringify(updatedList));
    } catch (error) {
      console.error("Error saving company list to AsyncStorage:", error);
    }
  };

  const loadCompanyList = async () => {
    try {
      const storedCompanyList = await AsyncStorage.getItem("companyList");
      if (storedCompanyList !== null) {
        setCompanyList(JSON.parse(storedCompanyList));
      }
    } catch (error) {
      console.error("Error loading company list from AsyncStorage:", error);
    }
  };

  const contextValue: CompanyContextProps = {
    companyList,
    updateCompanyList,
    removeCompany,
    emptyCompanyList,
  };

  return (
    <CompanyContext.Provider value={contextValue}>
      {children}
    </CompanyContext.Provider>
  );
};


// Export the loadCompanyList function
export const loadCompanyList = async () => {
  try {
    const storedCompanyList = await AsyncStorage.getItem("companyList");
    return storedCompanyList ? JSON.parse(storedCompanyList) : [];
  } catch (error) {
    console.error("Error loading company list from AsyncStorage:", error);
    return [];
  }
};
