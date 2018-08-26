import React from 'react';
import DoctorListItem from './DoctorListItem.jsx';

const DoctorList = (props) => (
  <ul className="list-group w-75 pt-3 text-left mx-auto">
    {props.doctors.length > 0 ? props.doctors.map( dr => <DoctorListItem doctor={dr} key={dr.id}/>) : 'No doctors found.'}
  </ul>
);

export default DoctorList;
