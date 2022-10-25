import './Main1.css';
import {SetProdProductReview} from '../actions/ProductActions';
import { useDispatch } from "react-redux"


export function Review(){
    const dispatch=useDispatch()
    function buttonclickReview(event){
  dispatch(SetProdProductReview(event))
    }

    return(
        <>
        <div className="review">
            <b>Customer Review</b><br/>
          
           <a>  <img src="https://th.bing.com/th/id/R.d8582c5d0f818a7fcbe3fcac80a6a578?rik=OtTDV7XIOdoI9Q&riu=http%3a%2f%2fsidlove.files.wordpress.com%2f2013%2f03%2ffour-stars_01.png&ehk=fyN6A6HBnZ5Wa8k8NA52kzYgmdIqI6xK7xOR3YxxIBE%3d&risl=&pid=ImgRaw&r=0"
             className="imgreview"onClick={()=>{
                buttonclickReview(109.95)
              }} /></a><br/>
             <img src="https://th.bing.com/th/id/R.82f8aa1d762570e41c88437f0574b926?rik=CrMwjzs6Zr5vnw&riu=http%3a%2f%2fwww.clipartkid.com%2fimages%2f281%2fclipartbest-com-3IENXO-clipart.png&ehk=jA2igogzOXeYPHz2d9o2LrqsoeQjMynFPsO1exjls4A%3d&risl=&pid=ImgRaw&r=0" 
                onClick={()=>{
                  buttonclickReview("22.3") 
                }}className="imgreview"/><br/>
             <img src="https://th.bing.com/th/id/OIP.TAN5Sd8B-MWeVWbs65nwcQHaBu?pid=ImgDet&w=1000&h=233&rs=1"
              onClick={()=>{
                buttonclickReview("55.99")
            }} className="imgreview"/><br/>
             <img src="https://th.bing.com/th/id/OIP.r0hxaTxkYREs-0mn-k4pKAHaBu?pid=ImgDet&w=700&h=163&rs=1"
                onClick={()=>{
                  buttonclickReview("15.99","695")
                }} className="imgreview"/><br/>
       
        </div><br/>
        </>
    )
            }