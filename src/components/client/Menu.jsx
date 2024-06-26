'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import 'bootstrap/dist/css/bootstrap.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import { DynamicFeed, Logout } from '@mui/icons-material';
import { NavDropdown } from 'react-bootstrap';
import { Children } from 'react';

function Menu() {
  const {data: session} = useSession()
  const title = <DynamicFeed />
return (
  <>
      <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">BB Shop</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title={title} >
              {Children}
            </NavDropdown>
          <Nav.Link as={Link} href="/"><HomeIcon/>Home</Nav.Link> 
          {
            session? <Nav.Link onClick={()=>signOut()}><Logout/>Se déconnecter</Nav.Link>
            : <Nav.Link onClick={()=> signIn()}><AccountCircleIcon/>Se connecter</Nav.Link>
          }   
          <Nav.Link as={Link} href="/client/pageAide"><HelpIcon />Aide</Nav.Link>   
            </Nav>
        </Container>
      </Navbar>
    </>
  
);
}
export default Menu;