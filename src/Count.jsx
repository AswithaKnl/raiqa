import React, { useState } from 'react';
import ListView from './ListView';

function Count() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToList = () => {
    setList([...list, count]);
  };

  const resetList = () => {
    setList([]);
  };

  const toggleSort = () => {
    const sortedList = [...list].sort((a, b) => (sortAsc ? a - b : b - a));
    setList(sortedList);
    setSortAsc(!sortAsc);
  };

  const deleteItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div className="text-center mt-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Counter & List App</h1>

      <div className="bg-white max-w-md mx-auto rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-6 text-left">Counter</h2>

        <div className="flex justify-center items-center mb-6">
          <button
            onClick={decrement}
            className="w-12 h-12 rounded-full border border-blue-500 text-blue-500 text-xl font-bold mr-4"
          >
            -
          </button>

          <span className="text-2xl font-bold">{count}</span>

          <button
            onClick={increment}
            className="w-12 h-12 rounded-full border border-blue-500 text-blue-500 text-xl font-bold ml-4"
          >
            +
          </button>
        </div>

        <button
          onClick={addToList}
          className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Add to List
        </button>
      </div>

      <div className="max-w-md mx-auto mt-8">
        <ListView
          list={list}
          onReset={resetList}
          onToggleSort={toggleSort}
          sortAsc={sortAsc}
          onDelete={deleteItem}
        />
      </div>
    </div>
  );
}

export default Count;
