import React, { Component } from 'react';
import { Browser as Router } from 'react-router-dom'
import WeatherForm from './WeatherForm'


export default class Weather extends React.Component{
	render(){
		return (
			<div>
				<h2>Weather Component</h2>
				<WeatherForm/>
			</div>
		);
	}
}