import React from 'react';

class DoctorListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }

  expandList() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const filledStars = Math.round(this.props.doctor.rating);

    let stars = [
      <span className="fa fa-star" key="0"></span>,
      <span className="fa fa-star" key="1"></span>,
      <span className="fa fa-star" key="2"></span>,
      <span className="fa fa-star" key="3"></span>,
      <span className="fa fa-star" key="4"></span>
    ]

    for (let i = 0; i < filledStars; i++) {
      stars[i] = <span className="fa fa-star filled" key={i}></span>
    }


    let details = (     
      <div>
        <span><img src={this.props.doctor.thumbnail}></img></span>
        <p>Address: {this.props.doctor.street_name}</p>
        <p>{`${this.props.doctor.city}, ${this.props.doctor.state}`}</p>
        <p>{this.props.doctor.phone_number}</p>

        {stars.map( star => star)}

        <span>{` ${this.props.doctor.rating}`}</span>
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