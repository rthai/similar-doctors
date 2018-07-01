import React from 'react';

class DoctorListItem extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      showDetails: false,
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
    ];

    // only fills full stars, not partial stars (fix at a later time)
    for (let i = 0; i < filledStars; i++) {
      stars[i] = <span className="fa fa-star filled" key={i}></span>
    }

    const details = (     
      <div className="doctor-list-item-details">
        {/* avatar loads too slow because request is made only when list is expanded (fix at a later time) */}
        <img src={this.props.doctor.thumbnail}></img> 
        <div className="doctor-list-item-info">
          <p>{` ${this.props.doctor.street_name}`}</p> 
          <p>{`${this.props.doctor.city}, ${this.props.doctor.state}`}</p>
          <p>{this.props.doctor.phone_number}</p>
          <div className="doctor-list-rating-stars">
            
            {stars.map( star => star)}

            <span>{` ${this.props.doctor.rating}`}</span>
          </div>
        </div>
      </div>
    ); 

    return (
      <li className="doctor-list-item">
        <a className="doctor-list-item-name" onClick={() => this.expandList()}>
          <h4>{`Dr. ${this.props.doctor.name}`}</h4>
        </a>
        {this.state.showDetails ? details : null}
      </li>
    );
  }
}

export default DoctorListItem;
