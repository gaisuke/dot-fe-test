/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './index.css';
import ListTarif from '../ListTarif';

function ListServis(props) {
  if (props.data !== []) {
    return (
      <div className="list-servis">
        <h3>{props.data.service}</h3>
        <span className="text-muted">
          {props.data.description}
          {' '}
        </span>
        <div className="row mx-0">
          {props.data.cost?.map((item, key) => <ListTarif data={item} key={`costs-${key}`} />)}
        </div>
      </div>
    );
  }
  return 'Tidak ada data';
}

export default ListServis;
