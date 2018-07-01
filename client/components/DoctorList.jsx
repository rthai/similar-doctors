import React from 'react';
import DoctorListItem from './DoctorListItem.jsx';

class DoctorList extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <ul className="DoctorList">
        {this.props.doctors.length > 0 ? 
        
        this.props.doctors.map( dr => <DoctorListItem doctor={dr} key={dr._id}/>) : 
        
        'No doctors found.'}
      </ul>
    );
  }
}

export default DoctorList;