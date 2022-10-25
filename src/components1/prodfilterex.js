import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';



export const Productfilter1 = () => {
  
  const {ProductList,searchText} = useSelector((state)=>{
    return state.products;
   
  })
 
 
 const filtered=ProductList.filter((p)=>{
  return p.title?.toLowerCase().indexOf(searchText?.toLowerCase())>-1;
       });

   
       return(
        <>
       <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>{
         filtered?.map((prod)=>{
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