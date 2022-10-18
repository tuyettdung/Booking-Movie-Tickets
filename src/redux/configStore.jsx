import { createStore, combineReducers } from "redux";



const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
   
  });
  
  export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );