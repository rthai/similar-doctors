import React from 'react';
import { specialties, cities } from '../../db/data/generateDoctor.js';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      specialty: '',
      city: '',
    }
    this.handleSpecialtySelection = this.handleSpecialtySelection.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
  }

  handleSpecialtySelection(e) {
    this.setState({specialty: e.target.value});
  }

  handleCitySelection(e) {
    this.setState({city: e.target.value});
  }

  find() {
    //request to get from db
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find a Doctor</h1>
        </header>
        <form className="App-form">
          <label htmlFor="search">Search</label>
          <select name="specialty" onChange={this.handleSpecialtySelection}>
            <option value="" defaultValue="disabled selected">Specialty</option>
            {specialties.map( (specialty, index) => <option value={specialty} key={index}>{specialty}</option>)}
          </select>
          <label htmlFor="near">Near</label>
          <select name="city" onChange={this.handleCitySelection}>
            <option value="" defaultValue="disabled selected">City</option>
            {cities.map( (city, index) => <option value={city} key={index}>{city}</option>)}
          </select>
          <button>Find</button>
        </form>
      </div>
    );
  }
}

export default App;
