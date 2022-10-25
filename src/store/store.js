import { composeWithDevTools } from 'redux-devtools-extension';

const { createStore,applyMiddleware  } = require("redux");
const {rootReducer} = require("../reducers")

  export const store =  createStore(rootReducer,composeWithDevTools(applyMiddleware()));
