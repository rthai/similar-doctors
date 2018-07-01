import React from 'react';
import axios from 'axios';

import { specialties, cities } from '../../db/data/generateDoctor.js';
import DoctorList from './DoctorList.jsx';

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      specialty: '',
      city: '',
      doctors: '',
      foundClicked: false,
    }
    this.handleSpecialtySelection = this.handleSpecialtySelection.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
  }

  handleSpecialtySelection(e) {
    this.setState({ specialty: e.target.value });
  }

  handleCitySelection(e) {
    this.setState({ city: e.target.value });
  }

  find() {
    axios.get('/api/doctors', {
      params: {
        specialty: this.state.specialty,
        city: this.state.city,
      }
    })
    .then( doctors =>  this.setState({ 
      doctors: doctors.data,
      foundClicked: true
    }))
    .catch( error => console.log(error))
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Find a Doctor</h1>
        </header>
        <form className="app-form">
          <div className="app-search specialty">
            <label htmlFor="search">Search</label>
            <select name="specialty" onChange={this.handleSpecialtySelection}>
              <option value="" defaultValue="disabled selected">Specialty</option>
              {specialties.map( (specialty, index) => <option value={specialty} key={index}>{specialty}</option>)}
            </select>
          </div>
          <div className="app-search near">
            <label htmlFor="near">Near</label>
            <select name="city" onChange={this.handleCitySelection}>
              <option value="" defaultValue="disabled selected">City</option>
              {cities.map( (city, index) => <option value={city} key={index}>{city}</option>)}
            </select>
            <button className="app-btn-find" type="button" onClick={() => this.find()}><i className="fa fa-search"></i></button>
          </div>
        </form>
        {this.state.foundClicked ? <DoctorList doctors={this.state.doctors}/> : null}
      </div>
    );
  }
}

export default App;
