import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';


export const Reviewfilter = () => {
  
  const {ProductList,Review} = useSelector((state)=>{
    return state.products;
   
  })
 
 
 const filteredreview=ProductList.filter((p)=>{
  return p.rating?.toLowerCase().indexOf(Review?.toLowerCase())>-1;

       });

   
       return(
        <>
        
       <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>{
         filteredreview?.map((prod)=>{
                return(
                    <>
                  
        <Card className="products"
             style={{ width: "16rem",margin:"8px" }}>
                <Card.Img varient="top" src={prod.image} className="img1" />
                <Card.Body className="container1">
                  <Card.Title className="cont1"><b>{prod.title}</b></Card.Title>
                  <Card.Title className="cont2">{prod.category}</Card.Title>
                  <Card.Title className="cont3">${prod.price}</Card.Title>
                </Card.Body>
        </Card><br/>
        
         
                    </>
                )
            })
            }
            
        </div>
         

       
        </>
       )
}