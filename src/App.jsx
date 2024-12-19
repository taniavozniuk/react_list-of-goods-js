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
  const [sortField, setSortField] = useState('');
  const [sortLength, setsortLength] = useState('');
  const [reverse, setReverse] = useState(false);

  const sortByAlphabet = () => {
    setVisobleGoods(
      [...visobleGoods].sort((goods1, goods2) => goods1.localeCompare(goods2)),
    );
    setSortField('alphabet');
    setsortLength('');
    setReverse(false);
  };

  const sortByLenght = () => {
    setVisobleGoods(
      [...visobleGoods].sort((goods1, goods2) => goods1.length - goods2.length),
    );
    setsortLength('length');
    setSortField('');
    setReverse(false);
  };

  const reverseOrder = () => {
    setReverse(!reverse);
  };

  const sortGoods = reverse ? [...visobleGoods].reverse() : visobleGoods;

  const shouldShowReset = sortField || sortLength || reverse;

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button', 'is-info', {
            'is-light': sortField === '',
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
            'is-light': sortLength === '',
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
            'is-light': !reverse,
          })}
          onClick={reverseOrder}
        >
          Reverse
        </button>

        <button
          type="button"
          className={cn('button', 'is-info', {
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
