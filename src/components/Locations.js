import { Component } from 'react';

class Locations extends Component{
    constructor(){
      super();
      this.state = {
          locationsData: [],
          clicked: true,  
      }
    }

    handleResult = (e) => {
      fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then(res => res.json())
      .then((data) => {
          this.setState({
              locationsData: data
          })
          console.log(this.state.locationsData); 
      });
  }

  componentDidMount(){
    this.handleResult();
  }
  
  handleSubmit = () => {
    console.log("fn working")
  }
  render(){
      let varLocations = this.state.locationsData.map((geos) => {
        
        return( 
        <div>
              <li>
                <div>Name: {geos.name}</div>
                <div>Climate: {geos.climate}</div>
                <div>Terrain: {geos.terrain}</div>
              </li>
        </div>
        )
      })    
      
      return(
        <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={ this.handleSubmit }>Show Locations</button>
        <ul>
        { varLocations }
        </ul>   
        </div>
      )
    }
  }

  export default Locations;
  