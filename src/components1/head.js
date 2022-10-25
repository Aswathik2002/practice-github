import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Head.css';
import { useDispatch, useSelector } from 'react-redux';
import {setprodsearchbarhold} from '../actions/ProductActions';
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router';



export function Header(){
  const dispatch=useDispatch();
  const onSearchTextChange=(event)=>{
    dispatch(setprodsearchbarhold(event.target.value));
  }


  const navigate = useNavigate();

  const {ProductAddtoCart}=useSelector((state)=>{
    return state.products;
  })

  const {ProductWishlist}=useSelector((state)=>{
    return state.products;
  })


  return(
<>
    <Navbar  collapsOnselect  bg='dark' className='nav' >
    <Container fluid >
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
          <Nav className="me-auto">
          <img
           src="https://th.bing.com/th/id/OIP.G4FOvrqb2Ta2_pOR7crKNAHaGL?w=212&h=180&c=7&r=0&o=5&pid=1.7"
           width="100"
           height="50"
           className='imgamazon'
          alt='Amazon logo'
           />
     
        <Navbar.Text  style={{color:"white",fontSize:"smaller",margin:"20px"}} >
          Hello<br/>Select Your Address
        </Navbar.Text>
       
<InputGroup className='searchbox'>
      <DropdownButton id="dropdown-basic-button" variant="secondary" title="All" className='drop1' >
        <Dropdown.Item href="#/action-1"> All Categories</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Amazon Devices</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Gift Card</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Furniture</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Beauty</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Jewellery</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Apps&Games</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Car&MotorBike</Dropdown.Item>
    </DropdownButton>
    
      <Form.Control className="searchbar" 
      aria-label='searchword'
      aria-describedby='basic-addon1'
      onChange={onSearchTextChange} 
       />
        
        <img className="searchimg"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAJYAlgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFBgIB/9oACAEBAAAAAOlAAAAAAAAAAPFOKS5IABl5Ms0MWtqABmZO5dKeHqagB45jduhTwemkAZ+V0oHN6eiAy6m+Bg2NYBn5fSAc5paIDxzG9cCpgdNIAZeXuXCnhzdD9AGXkzTQw2K17c+gCOlFLd94dG9ufQAD5iUL26AAPmHS6j0AAHn0AAAAAAH/xAAZAQEBAQEBAQAAAAAAAAAAAAAABAIDAQX/2gAKAgIQAxAAAAAAAAA1neeXQACuf3ON9uUdWNAazVPHUa8rlirA68+mJu4XSQ1gF8cNfntHDeZKQDeapvWNUcYLOewADpi+P5l4AAAAAAH/xAA1EAACAQMABQgIBwAAAAAAAAABAgMABBEFEjAxMhAgIVFScZKxExU0QEFQcuEUI0JTYWOi/9oACAEBAAE/APn8kscYy7habSMA3B2r1mv7JpdJQHeHWkljkGUcNtrm/wBXKQ+KmYsSzMSes0lvPJwRMRX4C67A8VPbTxjLRMBSsVIZSQesVbX+cJN4tpf3OrmFN54jSI8jhEGSat7KOHBbDvzLiyimBIAV+sVJG8blHGCKsLrOIXP0bKVxHG7ncopmLFmY9JOTVlb+hj1jxvzry3E0RI413UrFSGU4IORUUgljRx+obHSLYgA7T1bxiWeJDuLbC6j9FcSr/NaNfMLL2X2Ok90PeasPak7m2F/7S3cK0Zum712OkUzAG7L1bSCO4ic7g2wupBJcSsN2tWjVxC7dp9jKgkjdD8RTKVJVh0g4NWVwJogDxoMHnXk4hiwONt1AFiFUZJOBUMYiiRB8Bsr+1LfnIPqqOR43DocEVb3kUwAJ1X6uZPeRQggHWfqqSR5XLuck1aSRxTKzj7UCCAQdndWGSXh8NMCpKsCD1Go7qeLhkNesLntL4ae6uJBhpWxQBYhVBJPwFSWk0UYkZftyWd2YTqPweVAggEHIOzkijlGHQGn0bCeFnWvVn93+aXRsI4ndqjhiiGEQLRAIIIq7szDl06Y/Lks7wwnUfg8qBBAIOQfcCAQQavLMw5dOmPy5LO7MJ1H4PL3EgEEGryzMJLpweVIjSsEQZJpRqqB1AD3IKq7gB8q//8QAJxEAAgEDAwMDBQAAAAAAAAAAAQIDAAQRICEiEFFhEjAxE0BBQpH/2gAIAQIBAT8A91UdvhSaMMo/Q0QRrhhBHrf4p7kDZBQun/IFAxXA806FGKnSi+p1Hc1cvgBB1VirAirgBo1caYTiVKuhzB8aJONsAew0g4ogXEXmmVlOCOkMJYhmHGronKjG2pHZDlTQuI2GHWvqWy7gD+Ubo5GF2rhMncGpIzGcH2Y5DGciuEqePt//xAAmEQACAgAEBgIDAAAAAAAAAAABAgADBBEgYRASISIwMTNBQEKR/9oACAEDAQE/APKXVfZEFtZ/bwW2nPlWLQT1Yw4dPomEPSdojB1BGlzyqTKFzJY8WAYEGUkq5XTb8bTDnsI30J1vJ3OoE0vtAwYZg8LbQoIHuYcDIn71MiuMjDS6ntM5Lz7J/sGHGXU9Z3VtvEcOPC6BxO+t9/x//9k="  color="{dark}"
          />

</InputGroup>

      <DropdownButton id="dropdown-basic-button" variant="dark" className='img' title={<img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_960_720.png" width={25} height={25}/>}>  
        <Dropdown.Item href="#/action-1">English - EN </Dropdown.Item>
        <Dropdown.Item href="#/action-2">हिन्दी - HI</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> தமிழ் - TA </Dropdown.Item>
        <Dropdown.Item href="#/action-4">ಕನ್ನಡ - KN </Dropdown.Item>
        <Dropdown.Item href="#/action-5">മലയാളം - ML </Dropdown.Item>
        <Dropdown.Item href="#/action-6">বাংলা - BN</Dropdown.Item>
        <Dropdown.Item href="#/action-7">मराठी - MR </Dropdown.Item>
        <Dropdown.Item href="#/action-8">తెలుగు - TE </Dropdown.Item>
       </DropdownButton>
          
         <Navbar.Text className='t1'style={{color:"white",fontSize:"smaller",margin:"20px"}}>
          Hello,Signin<br/>Accounts & Lists
        </Navbar.Text>
        <Navbar.Text className='t1' style={{color:"white",fontSize:"smaller",margin:"20px"}}>
          Return<br/>& Orders
        </Navbar.Text>
        <img
            src="https://th.bing.com/th/id/OIP.ILhpj2TXyR5fR4YO7mMs8QHaH3?w=167&h=180&c=7&r=0&o=5&pid=1.7"
            width="70"
            height="50"
            className="card1"
            title=''
            alt='card.logo'
            margin= "35"
            margin-right="30"
            />
           </Nav>
    
    <Button 
       variant='dark'
       className='cart'
       onClick={()=>navigate("/AddtoCart")}>
       Cart<br/><Badge >{ProductAddtoCart.length}</Badge>
     </Button>

     <Button 
       variant='dark'
       className='wishlist'
       onClick={()=>navigate("/WishList")}>
       WishList<br/><Badge >{ProductWishlist.length}</Badge>
     </Button>
      
      </Container>
    </Navbar>
                
          
 
            
       
     </> 
    );
}