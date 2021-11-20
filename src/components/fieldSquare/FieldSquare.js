import React from 'react';
import s from './fieldSquare.module.css';

const FieldSquare = ({value, onClick}) => {
  return (
    <button type="button" className={s.btn} onClick={onClick}>{value}</button>
  );
}

export default FieldSquare;
