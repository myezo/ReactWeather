import React, { Component } from 'react';
import { Browser as Router } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Weather extends React.Component{
	render(){
		return (
			<div>
				<form>
				<input type="text"/>
				<button>Get Weather</button>
				</form>
			</div>
		);
	}
}