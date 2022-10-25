import { combineReducers } from "redux";
import { ProductsReducers } from "./ProductReducer";

export const rootReducer = combineReducers({
    
    products : ProductsReducers,
});