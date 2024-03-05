import { combineReducers } from 'redux';
import companyReducer from './CompanyReducers';

const rootReducer = combineReducers({
  company: companyReducer,
});

export default rootReducer;
