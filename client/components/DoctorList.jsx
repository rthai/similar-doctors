import React from 'react';
import DoctorListItem from './DoctorListItem.jsx';

const DoctorList = (props) => (
  <ul className="DoctorList">
    {props.doctors.length > 0 ? props.doctors.map( dr => <DoctorListItem doctor={dr} key={dr._id}/>) : 'No doctors found.'}
  </ul>
);

export default DoctorList;
