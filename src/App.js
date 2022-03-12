import './App.css';
import React, { Component } from 'react';
import SearchBox from './SearchBox'
import CardList from './CardList';
import Scroll from './Scroll'
import 'tachyons'

class App extends Component
{

  constructor()
  {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value })
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render()
  {

    const filteredRobots = this.state.robots.filter(robots =>{
      return (
        robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()) 
        + 
        robots.username.toLowerCase().includes(this.state.searchField.toLowerCase())
      );
    })

    if(this.state.robots.length === 0)
    {
      return <h1>Loading</h1>
    }
    else
    {
      return(
        <div>
          <div className='tc'>
            <Scroll >
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange} />
            </Scroll>
          </div>
          <div className='tc pt7'>
            <CardList robots={filteredRobots} />
          </div>
        </div>
      )
    }
  }
}
export default App;
