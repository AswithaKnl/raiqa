import React from 'react';
import { FaArrowDown, FaTimesCircle } from 'react-icons/fa';

function ListView({ list, onReset, onToggleSort, sortAsc, onDelete }) {
  return (
    <div className="mt-6 bg-white w-full max-w-md mx-auto p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Number List</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
          >
            Reset
          </button>
          <button
            onClick={onToggleSort}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition flex items-center gap-1"
          >
            <span>{sortAsc ? 'Sort' : 'Sort'}</span>
            <FaArrowDown className={`${sortAsc ? '' : 'rotate-180'}`} />
          </button>
        </div>
      </div>

      <ul className="divide-y">
        {list.map((item, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <span>{item}</span>
            <span className="text-gray-500">#{index + 1}</span>
            <FaTimesCircle
              className="text-red-500 cursor-pointer hover:text-red-700"
              onClick={() => onDelete(index)}
            />
          </li>
        ))}
      </ul>

      <div className="mt-4 text-left font-semibold">
        Total numbers: {list.length}
      </div>
    </div>
  );
}

export default ListView;
