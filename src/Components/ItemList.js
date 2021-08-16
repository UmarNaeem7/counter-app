/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Item from './Item';

function ItemList({ customProp }) {
  const [items, setItems] = useState([Item, Item, Item]);
  const [key, setKey] = useState(Math.random());
  const [newItemName, setNewItemName] = useState('');

  const [names, setNames] = useState(['Drinks', 'Meals', 'Naps']);
  const [length, setLength] = useState(3);

  const deleteItem = (index) => {
    // alert(index);
    const temp1 = [...items]; // create new copy
    temp1.splice(index, 1);
    setItems(temp1);
    const temp2 = [...names];
    temp2.splice(index, 1);
    setNames(temp2);
    setLength(temp2.length);
  };

  const resetAll = () => {
    setKey(Math.random());
  };

  const addItem = (e) => {
    e.preventDefault();
    const temp1 = [...names];
    temp1.push(newItemName);
    setNames(temp1);
    const temp2 = [...items];
    temp2.push(Item);
    setNewItemName('');
    setItems(temp2);
    setLength(temp2.length);
  };

  const changeHandler = (event) => {
    setNewItemName(event.target.value);
  };

  useEffect(() => {
    customProp(length);
  }, [length]);

  return (
    <div>
      <div key={key} style={{ marginTop: '10px' }}>
        <button type="button" className="btn btn-primary" onClick={resetAll}>
          Reset
        </button>
        <br />
        <br />
        <form onSubmit={addItem}>
          <label style={{ marginRight: '5px' }}>
            <strong>Item name:</strong>
            <input
              style={{ marginRight: '5px' }}
              type="text"
              placeholder="Name of item"
              value={newItemName}
              onChange={changeHandler}
              required
            />
          </label>
          <button type="submit" className="btn btn-success btn-sm">
            Add
          </button>
        </form>
        {items.map((MyItem, index) => (
          <div key={index}>
            <MyItem
              deleteHandler={() => deleteItem(index)}
              itemName={names[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
