import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {SetProdProductWishList} from '../actions/ProductActions';
import './Main1.css';

export const AddtoCart = () => {

  const[cartitems,setCartItems]=useState();
  const dispatch=useDispatch();
  const{ProductAddtoCart}=useSelector((state)=>{
    return state.products
});

const incrementItemQty = (ProductList) => {
  const selectedItem = cartitems.find((item) => item.id === ProductList.id);
  selectedItem.qty = selectedItem.qty ? selectedItem.qty + 1 : 1;
  setCartItems([...cartitems]);
  console.log("increment", cartitems);
};

const decrementItemQty = (ProductList) => {
  const selectedItem = cartitems.find((item) => item.id === ProductList.id);
  selectedItem.qty = selectedItem.qty ? selectedItem.qty - 1 : 1;
  setCartItems([...cartitems]);
  console.log("decrement",cartitems);
};

const removeItemtoCart = (ProductList) => {
  const newList = cartitems.filter((item) => item.id !== ProductList.id);
  setCartItems([...newList]);
  console.log("remove",setCartItems);

};

var totalprice=0;

useEffect(()=>{
  setCartItems(ProductAddtoCart);
},[ProductAddtoCart]);
console.log("cartitems",cartitems);

function buttonclick2(event){
dispatch(SetProdProductWishList(event))
}

return(
  <>
  {
cartitems?.map((prod)=>{
  totalprice = prod.qty * prod.price
  return(
   
    <>
             
     <Card className="products"
             style={{ width: "16rem",margin:"8px" }}>
                <Card.Img varient="top" src={prod.image} className="img1" />
                <Card.Body className="container1">
                  <Card.Title className="cont1"><b>{prod.title}</b></Card.Title>
                  <Card.Title className="cont2">{prod.category}</Card.Title>
                  <Card.Title className="cont3">${prod.price}</Card.Title>
                  
                  <div className='Button'>
                  <Button className='incBtn'
                  onClick={()=>{
                    incrementItemQty(prod)
                   }}>+</Button>
                  <Button className='Btn'>{prod.qty}</Button>
                  <Button className='decBtn'
                   onClick={()=>{
                    decrementItemQty(prod)
                   }}>-</Button>
                  </div>

                 <Button style={{marginLeft:"10px"}}  onClick={()=>{
                   removeItemtoCart(prod)
                }}>Remove From Cart</Button> 

                  <Button style={{margin:"10px",width:"158px"}} onClick={()=>{
                  buttonclick2(prod)
                 }}>Save for Later</Button>   
                <div>
                   <h3>
                     TotalPrice:${totalprice}
                   </h3>
               </div>
            </Card.Body>
        </Card><br/>

    </>
  )
})

}
</>
)
}