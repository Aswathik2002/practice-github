import { useState } from "react"
import { useEffect } from "react"
import {  useDispatch } from 'react-redux';
import {setProducts} from '../actions/ProductActions';
import './Main1.css';
import { ProductCard } from "./productCard";



export const Products1=()=>{

   const[productsList,setProductsList]= useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(async(response)=>{
         const data=await response.json();
         setProductsList(data)
         console.log("products:",data)
         dispatch(setProducts(data))
         
          })
    },[])
  
    return(
     <>   
     <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>
        {
         productsList.map((p)=>{
            return(
                <>
           <ProductCard  product= {p}/>
           </>
              )
         })
        }
       </div> 
        </>
    )
}
