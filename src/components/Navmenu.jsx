import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navmenu extends React.Component{
	render(){
		return (
			<div>
			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
					  <Link to="/">React Weather</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} componentClass={Link} href="/" to="/">
						About
						</NavItem>
						<NavItem eventKey={1} componentClass={Link} href="/examples" to="/examples">
						Examples
						</NavItem>
						<NavItem eventKey={1} componentClass={Link} href="/weather" to="/weather">
						Weather
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			</div>
		);
	}
}