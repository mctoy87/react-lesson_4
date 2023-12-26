import React from 'react';
import style from './FuncComplex.module.css';
import PropTypes from 'prop-types';

export const FuncComplex = ({min, max}) => {
  const [state, setState] = React.useState({
    userNumber: '',
    count: 0,
    result: 'Результат',
  });

  const [randomNumber] = React.useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );


  const handleSubmit = e => {
    e.preventDefault();

    setState((prevState) => {
      let result = '';
      let count = prevState.count;
      if (!state.userNumber ||
          state.userNumber < min ||
          state.userNumber > max) {
        return {...prevState, result: `Введите число от ${min} до ${max}`};
      }
      count++;
      if (state.userNumber > randomNumber) {
        result = `${state.userNumber} больше загаданного числа`;
      } else if (state.userNumber < randomNumber) {
        result = `${state.userNumber} меньше загаданного числа`;
      } else {
        result = `Вы угадали загаданное число ${state.userNumber},
          попыток ${count}`;
      }

      return {...prevState, count, result};
    });
  };

  const handleChange = e => {
    setState({...state, userNumber: e.target.value});
  };

  console.log('randomNumber: ', randomNumber);

  return (
    <div className={style.game}>
      <p className={style.result}>{state.result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          Попыток {state.count}
        </label>
        <input
          className={style.input}
          type='number'
          id='user_number'
          value={state.userNumber}
          onChange={handleChange}
        />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FuncComplex.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
};
