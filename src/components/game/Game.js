import React from 'react';
import Field from '../field/Field';
import s from './game.module.css';

export default function Game() {
  return (
    <div className={s.container}>
      <Field/>
    </div>
  );
};

