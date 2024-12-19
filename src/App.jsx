import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [visobleGoods, setVisobleGoods] = useState(goodsFromServer);
  // const [sortField, setSortField] = useState('');
  // const [sortLength, setsortLength] = useState('');
  // const [reverse, setReverse] = useState(false);
  const [sortType, setSortType] = useState('');
  const [isReversed, setIsReverse] = useState(false);

  const sortByAlphabet = () => {
    setSortType('alphabet');
  };

  const sortByLenght = () => {
    setSortType('length');
  };

  const reverseOrder = () => {
    setIsReverse(!isReversed);
  };

  const sortGoods = isReversed ? [...visobleGoods].isReversed() : visobleGoods;

  const shouldShowReset = sortType || isReversed;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': sortType === '',
          })}
          onClick={() => {
            sortByAlphabet();
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': sortType === '',
          })}
          onClick={() => {
            sortByLenght();
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': !isReversed,
          })}
          onClick={reverseOrder}
        >
          Reverse
        </button>

        <button
          type="button"
          className={cn('button is-danger', {
            'is-light': visobleGoods !== goodsFromServer,
          })}
          onClick={() => {
            setVisobleGoods(goodsFromServer);
          }}
          disabled={shouldShowReset}
        >
          Reset
        </button>
      </div>

      <ul>
        {sortGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
