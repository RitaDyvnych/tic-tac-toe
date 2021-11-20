import React from 'react';
import s from './field.module.css';
import FieldSquare from '../fieldSquare/FieldSquare'

const Field = () => {
  return (
    <div className={s.field}>
      <FieldSquare />
      <FieldSquare />
      <FieldSquare />
      <FieldSquare />
      <FieldSquare />
      <FieldSquare />
      <FieldSquare />
      <FieldSquare />
      <FieldSquare />
    </div>
  );
}

export default Field;
