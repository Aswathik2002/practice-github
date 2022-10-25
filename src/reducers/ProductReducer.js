import { ActionTypes } from "../actions/actionTypes";


const initialState={
    ProductList:[],
    ProductAddtoCart:[],
    ProductWishlist:[],
    
    
}
export const ProductsReducers=(state=initialState,action)=>{
    switch(action.type){
      
        case ActionTypes.SET_PRODUCTS:
            return{
                ...state,
                ProductList:action.payload
            }


        case ActionTypes.SET_PROD_Searchbarhold:
            return{
                ...state,
                searchText:action.payload
            }
        

         case ActionTypes.SET_PRODUCTCART:
            return{
                    ...state,
                    ProductAddtoCart:
                    [...state.ProductAddtoCart,action.payload]
                }

           
        case ActionTypes.SET_WISHLIST:
            return{
                ...state,
                ProductWishlist:
                [...state.ProductWishlist,action.payload]
                 }     
     
         
         case ActionTypes.SET_DEPARTMENT:
             return{
                    ...state,
                    Departmentfilter:action.payload
                     }



        case ActionTypes.SET_REVIEW:
            return{
               ...state,
               Review:action.payload
                 }
         

              

         default:
                return state;
               
    }
}