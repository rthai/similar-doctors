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
      stars[i] = <span className="fa fa-star filled"></span>
    }

    const details = (     
      <div className="doctor-list-item-details">
        {/* avatar loads too slow because request is made only when list is expanded (fix at a later time) */}
        <img src={this.props.doctor.thumbnail} className="float-left mr-3"></img> 
        <div className="mb-1">
          <dd>{` ${this.props.doctor.street_name}`}</dd> 
          <dd>{`${this.props.doctor.city}, ${this.props.doctor.state}`}</dd>
          <dd>{this.props.doctor.phone_number}</dd>
          <div className="doctor-list-rating-stars">
            
            {/* array key warning */}
            {stars.map( (star, idx) => star)} 

            <span>{` ${this.props.doctor.rating}`}</span>
          </div>
        </div>
      </div>
    ); 

    return (
      <li className="list-group-item list-group-item-action">
        <a onClick={() => this.expandList()}>
          <h4>{`Dr. ${this.props.doctor.name}`}</h4>
        </a>
        {this.state.showDetails ? details : null}
      </li>
    );
  }
}

export default DoctorListItem;
