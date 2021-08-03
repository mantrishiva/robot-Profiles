// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-Box/searchbox.component';
class  App extends Component{
  constructor(){
    super();
    this.state = {
      profles: [],
      searchField: ""
    }
    console.log("constructure")
  }

  componentDidMount(){
    console.log("component did mount")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({profles:users}))
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }

  render(){
    console.log("render",this.state)
    let { profles, searchField } = this.state;
    console.log("profile",profles)
    const filteredData = profles.filter(x => x.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Robot Profiles</h1>
        {/* <input type="search" placeholder="search for profile" onChange={e => this.setState({searchField:e.target.value})}></input> */}
        <SearchBox
         placeholder="search for profile" handleChange={this.handleChange}
        />
        <CardList profiles={filteredData} /> 
      </div>
    );
  }
  
}

export default App;
