/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

function ListTarif(props) {
  if (props.data !== []) {
    return (
      <div className="list-tarif">
        <p className="mb-0">
          Rp.
          {props.data.value}
        </p>
        <label>
          ETD:
          {props.data.etd}
          {' '}
          Hari
        </label>
      </div>
    );
  }
  return 'Tidak ada data';
}

export default ListTarif;
