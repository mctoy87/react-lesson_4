import React from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';

export const FunctionalComponent = ({min, max}) => {
  const [userNumber, setUserNumber] = React.useState('');
  const [result, setResult] = React.useState('Результат');

  const [randomNumber] = React.useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );


  const handleSubmit = e => {
    e.preventDefault();
    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} больше загаданного числа`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} меньше загаданного числа`;
      }

      return `Вы угадали загадданное число ${userNumber}`;
    });
  };

  const handleChange = e => {
    setUserNumber(e.target.value);
  };

  console.log('randomNumber: ', randomNumber);

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          Угадай число
        </label>
        <input
          className={style.input}
          type='number'
          id='user_number'
          value={userNumber}
          onChange={handleChange}
        />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
};
