import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function AppNavbar(){
	return (
	<Navbar bg="light" expand="lg">
		<div>
			<Navbar.Brand as={Link} to="/">Real Time Search</Navbar.Brand>
				<Nav>
					<Nav.Link as={NavLink} to="/search-one">Search</Nav.Link>
					<Nav.Link as={NavLink} to="/search-two">Search (Auto Filter)</Nav.Link>
				</Nav>
		</div>
	</Navbar>
	)
};
