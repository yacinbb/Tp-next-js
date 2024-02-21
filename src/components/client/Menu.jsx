'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
function Menu() {
return (
  <Nav activeKey="/home" as="ul">
      <Nav.Item as="li">
      <Nav.Link as={Link} href="/"><HomeIcon/>Home</Nav.Link>      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link as={Link} href="/"><AccountCircleIcon/>Se
connecter</Nav.Link>      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link as={Link} href="/"><HelpIcon/>Aide</Nav.Link>      </Nav.Item>
    </Nav>
   
);
}
export default Menu;