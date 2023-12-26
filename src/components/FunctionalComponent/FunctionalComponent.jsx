import {useState, useEffect} from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';

export const FunctionalComponent = ({min, max}) => {
  const [userNumber, setUserNumber] = useState('');
  const [result, setResult] = useState('Результат');
  const [count, setCount] = useState(0);
  const [randomNumber] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  useEffect(() => {
    console.log('useEffect - CDM');
    console.log('useEffect - CDU');
  });

  useEffect(() => {
    console.log('[]useEffect - CDM');
  }, []);

  useEffect(() => {
    console.log('[userNumber]useEffect - CDM');
  }, [userNumber]);

  useEffect(() => {
    console.log('[userNumber]useEffect - CDM');
    return () => {
      console.log('CWU');
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);

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


  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          Попыток {count}
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
