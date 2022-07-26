import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
class Header extends React.Component{
render(){
return(

  <div className="Header" >
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HornedBeast</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Suhaib ALNAJI</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<h1>Hello world From React</h1>

  </div>
)
  

}

}


export default Header;