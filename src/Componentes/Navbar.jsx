import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import img from './sas.png'
import './App.css';
function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <div  style={{backgroundImage: `url(${img})` }}>
        <Container>
                <Navbar.Brand href="/" >
                    <img style={{marginLeft: '3%'}}
                    alt=""
                    src="https://www.turismojudaico.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c29222b3.png&w=1920&q=75"
                    width="95"
                    height="95"
                    />{''}
                    <Nav.Link href="/" className="nav-link-home">Home</Nav.Link>
                </Navbar.Brand>
        </Container>
        </div>
    </Navbar>
  );
}

export default NavBar;