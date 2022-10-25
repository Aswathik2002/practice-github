import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import './Main1.css';

export default function SingleProducts(){

    const {ProductList} = useSelector((state)=>{
        return state.products;
       
      })

    let params = useParams();
    const ProductId=params.ProductId;

    useEffect(()=>{
     console.log("Fetched just now from single products",ProductId)
     },[ProductId])
     
 const filter11=ProductList?.filter((f)=>{
    return f.id==ProductId
});
return (
   
   filter11?.map(prod=>{
    return <div className="d-flex flex-column">
   {
<Card style={{ width: "35rem",height:"30rem",marginRight:"10px" }} className="h1">
                <Card.Img varient="top" src={prod.image} className="img1" />
                <Card.Body className="container1">
                  <Card.Title className="cont1"><b>{prod.title}</b></Card.Title>
                  <Card.Title className="cont2">{prod.category}</Card.Title>
                  <Card.Title className="cont3">${prod.price}</Card.Title>
                 </Card.Body>
              </Card>
              }
    </div>
   })
   
)
}