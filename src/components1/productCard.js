import {Card,Button} from 'react-bootstrap';
import {SetProdProductCart} from '../actions/ProductActions';
import { useDispatch } from "react-redux"
import {SetProdProductWishList} from '../actions/ProductActions';

export const ProductCard = (props)=>{

  const dispatch=useDispatch();

 const product = props.product;

  // function buttonclick(event,product){
  //  dispatch(SetProdProductCart(event))
  //   }

 const buttonclick =(product)=>{
        product.qty=1;
        dispatch(SetProdProductCart(product));
        console.log("productqty",product.qty)
        
      };
    
 

  function buttonclick1(event){
    dispatch(SetProdProductWishList(event))
        alert("successfully")
      }
    
     

   return(
        <>
        {
          
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <Card className="products"
        style={{ width: "16rem",margin:"8px" }}>
        <Card.Img varient="top"  src={props.product.image} className="img1"/>  
        <Card.Body className="container1">
        <Card.Title className="cont1t"><b>{props.product.title}</b></Card.Title>
       <Card.Title className="cont2c" >{props.product.category}</Card.Title>
       <Card.Title className="cont3">${props.product.price}</Card.Title>
       
       <Button style={{margin:"10px",width:"200px"}} onClick={()=>{
              buttonclick(product)
            }}>Add to Cart </Button>
            
            <Button style={{margin:"10px",width:"200px"}} onClick={()=>{
              buttonclick1(props.product)
            }}> Watch for Later </Button>



       </Card.Body>
       </Card><br/>
       </div>
      
}
     </>
           )
         


}