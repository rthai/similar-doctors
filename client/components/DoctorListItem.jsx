import React from 'react';

class DoctorListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }

  expandList() {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const details = (     
      <div>
        <img src={this.props.doctor.thumbnail}></img>
        <p>Address: {this.props.doctor.street_name}</p>
        <p>{`${this.props.doctor.city}, ${this.props.doctor.state}`}</p>
        <p>{this.props.doctor.phone_number}</p>
        <p>{this.props.doctor.rating}</p>
      </div>
    ); 

    return (
      <li className="DoctorListItem">
        <a onClick={() => this.expandList()}>
          <h4>{`Dr. ${this.props.doctor.name}`}</h4>
        </a>
        {this.state.showDetails ? details : null}
      </li>
    );
  }
}

export default DoctorListItem;