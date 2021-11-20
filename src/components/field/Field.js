import React from 'react';
import s from './field.module.css';
import FieldSquare from '../fieldSquare/FieldSquare';
import PropTypes from "prop-types";

const Field = ({fieldSquare, onClick}) => {
  return (
    <div className={s.field}>
      {
        fieldSquare.map((item, index) => (
          <FieldSquare key={index} value={item} onClick={()=>onClick(index)} />
        ))
      }
    </div>
  );
}

export default Field;

Field.propTypes = {
  fieldSquare: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};