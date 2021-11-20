import React, {useState} from 'react';
import Field from '../field/Field';
import s from './game.module.css';
import Winners from '../../Winners';

export default function Game() {
  const [field, setField] = useState(Array(9).fill(null));
  const [gamerX, setGamerX] = useState(true);
  const winner = Winners(field);

  const handleClick = (index) => {
    const copyField = [...field];
    if (winner || copyField[index]) {
      return;
    }
    copyField[index] = gamerX ? 'X' : 'O';
    setField(copyField);
    setGamerX(!gamerX);
  }
  
  const newGame = () => {
    return (
      <button
        type='button'
        className={s.btn__newGame}
        onClick={() => { setField(Array(9).fill(null)); setGamerX(true); }}
      >Start new game</button>
    )
  }
  const gamerMove = () => {
    return (
      <p className={s.text}>
        {winner?`Winner ${winner}`:`Now move gamer ${(gamerX?"X":"O")}`}
      </p>
    )
  }

  return (
    <div className={s.container}>
      {newGame()}
      {gamerMove()}
      <Field fieldSquare={field} onClick={handleClick} />
    </div>
  );
};

