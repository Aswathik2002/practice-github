import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';


export function Electronics(){
    const {ProductList,Electronics} = useSelector((state)=>{
        return state.products;
       
      })
     
     
      const filtered5=ProductList?.filter((e)=>{
        return e.category=="Electronics"
    });
        
 
    return(
        filtered5?.map(prod=>{
        return <div className='electronics'> 
            {
                <a href={'/Electronics/+prod.id'}>
                 <div className='electronics'>
                 <Card className="products"
             style={{ width: "16rem",margin:"8px" }}>
                <Card.Img varient="top" src={prod.image} className="img1" />
                <Card.Body className="container1">
                  <Card.Title className="cont1"><b>{prod.title}</b></Card.Title>
                  <Card.Title className="cont2">{prod.category}</Card.Title>
                  <Card.Title className="cont3">${prod.price}</Card.Title>
                </Card.Body>
        </Card><br/>
              </div>
                </a>
                
      }
</div>
    }
       
    ))
}