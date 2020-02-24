import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './app.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor () {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state
		const filteredRobots = robots.filter(robot => {
			let robotName = robot.name.toLowerCase()
	   	let thisSearchFieldState = searchfield.toLowerCase()
			return robotName.includes(thisSearchFieldState);
		})
		// Ternary
		return !robots.length ?
			<h1>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1 mb0'>Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
	}
}

export default App;