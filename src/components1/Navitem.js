import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavList2 } from './Nav';




export function Nav1() {
  
 
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
            
            {
                NavList2?.map((nav)=> {
                  return (
                    <Nav.Link className="navs" href={nav.link}>{nav.text}</Nav.Link>
                    
                  )
                })
                 } 
                
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      
    );
  }