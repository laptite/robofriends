import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './app.css';
import Scroll from './Scroll';

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
		const filteredRobots = this.state.robots.filter(robot => {
			let robotName = robot.name.toLowerCase()
	   	let thisSearchFieldState = this.state.searchfield.toLowerCase()
			return robotName.includes(thisSearchFieldState);
		})
		return (
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