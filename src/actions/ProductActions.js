import {ActionTypes} from './actionTypes';

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}


export const setprodsearchbarhold=(searchText)=>{
    return{
        type:ActionTypes.SET_PROD_Searchbarhold,
        payload:searchText,
    }
}

export const SetProdProductCart=(Cart)=>{
    return{
        type:ActionTypes.SET_PRODUCTCART,
        payload:{
           ...Cart,
            qty:1,
        }
    }
}







export const SetProdProductWishList=(wishList)=>{
    return{
        type:ActionTypes.SET_WISHLIST,
        payload:wishList,
    }
}

export const SetProdProductDepartment=(Departmentfilter)=>{
    return{
        type:ActionTypes.SET_DEPARTMENT,
        payload:Departmentfilter,
    }
}


export const SetProdProductReview=(Review)=>{
    return{
        type:ActionTypes.SET_REVIEW,
        payload:Review,
    }
}

export const SetProdProductElectronics=(Electronics)=>{
    return{
        type:ActionTypes.SET_ELECTRONICS,
        payload:Electronics,
    }
}