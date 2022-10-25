import React from 'react'
import {  Card } from 'react-bootstrap'
import {  useSelector } from 'react-redux'



export const WishList = () => {

  const{ProductWishlist}=useSelector((state)=>{
    return state.products
})

return(
  <>
  {
ProductWishlist?.map((prod)=>{
  return(
    <>
            
     <Card className="products"
             style={{ width: "16rem",margin:"8px" }}>
                <Card.Img varient="top" src={prod.image} className="img1" />
                <Card.Body className="container1">
                  <Card.Title className="cont1"><b>{prod.title}</b></Card.Title>
                  <Card.Title className="cont2">{prod.category}</Card.Title>
                  <Card.Title className="cont3">${prod.price}</Card.Title>

                {/* <Button style={{marginLeft:"10px"}}  onClick={()=>{
                  DeleteButton(prod)
                }}>Delete</Button> */}

               

                </Card.Body>
        </Card><br/>
        
    </>
  )
})

}
</>
)
}