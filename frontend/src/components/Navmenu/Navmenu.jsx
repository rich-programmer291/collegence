import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LuLogOut } from "react-icons/lu";
import './Navmenu.css';
import { logoutUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";

const Navmenu = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "solid 1px white" }}>
        <Navbar.Brand href="/">
          <img src="/images/logo.png" className="logo" style={{ marginLeft: '3rem' }} />
        </Navbar.Brand>
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ display:'flex', justifyContent: 'space-between' }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/article">Articles</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            {!currentUser && (
              <div style={{marginLeft:'40rem',right:'1rem', width:'max-content',display:'flex'}}>
                <Nav.Link href="/login">| &nbsp;&nbsp;Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </div>
            )}
            {/* <Nav.Link href="/users">Users</Nav.Link> */}
            {currentUser && (
              <div style={{marginLeft:'40rem',right:'1rem', width:'max-content',display:'flex'}}>
                <Nav.Link onClick={()=>dispatch(logoutUser())}>Logout <LuLogOut/></Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navmenu;
