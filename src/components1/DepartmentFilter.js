import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';


export const Departmentfilter = () => {
  
  const {ProductList,Departmentfilter} = useSelector((state)=>{
    return state.products;
   
  })
 
 
 const filtered1=ProductList.filter((p)=>{
  return p.category?.toLowerCase().indexOf(Departmentfilter?.toLowerCase())>-1;
//    return p.category?.indexOf(Departmentfilter)>-1;
       });

   
       return(
        <>
        
       <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>{
         filtered1?.map((prod)=>{
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