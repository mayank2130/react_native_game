import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ADD_COMPANY = 'ADD_COMPANY';
export const REMOVE_COMPANY = 'REMOVE_COMPANY';
export const EMPTY_COMPANY_LIST = 'EMPTY_COMPANY_LIST';
export const LOAD_COMPANY_LIST = 'LOAD_COMPANY_LIST';


export const addCompany = (newCompany: string) => ({
  type: ADD_COMPANY,
  payload: newCompany,
});

export const removeCompany = (company: string) => ({
  type: REMOVE_COMPANY,
  payload: company,
});

export const emptyCompanyList = () => ({
  type: EMPTY_COMPANY_LIST,
});

export const loadCompanyList = () => async (dispatch: Dispatch) => {
  try {
    const storedCompanyList = await AsyncStorage.getItem('companyList');
    const companyList = storedCompanyList ? JSON.parse(storedCompanyList) : [];
    dispatch({
      type: LOAD_COMPANY_LIST,
      payload: companyList,
    });
  } catch (error) {
    console.error('Error loading company list from AsyncStorage:', error);
  }
};
