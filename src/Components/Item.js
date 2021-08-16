/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item({ deleteHandler, itemName }) {
  const [count, setCount] = useState(0);
  const [cName, setCName] = useState('badge bg-warning text-dark');

  useEffect(() => {
    setCName(count !== 0 ? 'badge bg-primary' : 'badge bg-warning text-dark');
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const zero = 'zero';

  return (
    <div style={{ marginTop: '10px' }}>
      <text style={{ marginRight: '5px' }}>{itemName || 'default'}</text>
      <span style={{ marginRight: '10px' }} className={cName}>
        {count !== 0 ? count : zero}
      </span>
      <button
        type="button"
        style={{ marginRight: '5px' }}
        className="btn btn-secondary btn-sm"
        onClick={increment}
      >
        +
      </button>
      <button
        type="button"
        style={{ marginRight: '5px' }}
        className="btn btn-secondary btn-sm"
        onClick={decrement}
      >
        -
      </button>
      <button
        type="button"
        onClick={deleteHandler}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
