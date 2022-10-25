
import {SetProdProductDepartment} from '../actions/ProductActions';
import { useDispatch } from "react-redux"

export function Department(){
    
  const dispatch=useDispatch()
    function buttonclick1(event){
  dispatch(SetProdProductDepartment(event))
      
    }

    return(
        <>
        <div style={{marginleft:"50px"}}>
            <b>Department</b><br/>
            <a onClick={()=>{
              buttonclick1("men's clothing")
            }}
            className="Department">men's  clothing</a><br/>

            <a onClick={()=>{
              buttonclick1("jewelery")
            }} className="jewelery">jewelery</a><br/>
            
            <a onClick={()=>{
              buttonclick1("electronics")
            }} className="Department">electronics</a><br/>

            <a  onClick={()=>{
              buttonclick1("women's clothing")
            }}className="Department">women's  clothing</a><br/>
            
             </div>
        <br/>
        </>
    )
}