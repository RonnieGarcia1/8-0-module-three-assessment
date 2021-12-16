import { Component } from 'react';

class People extends Component{
    constructor(){
      super();
      this.state = {
        individuals: [],
        searchStr: "",
      }
    }

    handleResult = (e) => {
      fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then((data) => {
          this.setState({
              individuals: data
          })
          console.log(this.state.individuals); 
      });
  }

  componentDidMount(){
    this.handleResult();
  }
  
  handleSearch = (e) => {
    e.preventDefault();   
    this.setState({
        searchStr: e.target.value,
    })
    console.log(this.state.searchStr);
}

    render(){

      let differentPeople = this.state.individuals.map((people) => {
        if(people.name === this.state.searchStr){
        return(
        <div>
          <div>Name: { people.name }</div>
          <div>Age: { people.age }</div>
          <div>Gender: { people.gender }</div>
        </div>
        )
        }
      })
      return(
        <div className="people">
        <h1>Search for a Person</h1>
        <form onSubmit={this.handleResult} id="search-bar">
            <input type="text" id="text-input" onChange={this.handleSearch} value={this.state.searchStr} placeholder='Find Your Person'/>
            <button type="submit" id="search-button">Submit</button>
        </form>
        <div>
          {differentPeople}
        </div>
        </div>
      )
    }
  }

  export default People;
  