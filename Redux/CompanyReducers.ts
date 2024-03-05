export const ADD_COMPANY = "ADD_COMPANY";
export const REMOVE_COMPANY = "REMOVE_COMPANY";
export const EMPTY_COMPANY_LIST = "EMPTY_COMPANY_LIST";
export const LOAD_COMPANY_LIST = "LOAD_COMPANY_LIST";

interface CompanyState {
  companyList: string[];
}

const initialState: CompanyState = {
  companyList: [],
};

const companyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
        companyList: [...state.companyList, action.payload],
      };
    case REMOVE_COMPANY:
      return {
        ...state,
        companyList: state.companyList.filter((c) => c !== action.payload),
      };
    case EMPTY_COMPANY_LIST:
      return {
        ...state,
        companyList: [],
      };
    case LOAD_COMPANY_LIST:
      return {
        ...state,
        companyList: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
