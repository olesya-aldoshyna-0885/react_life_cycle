// import { useState } from 'react';

const FormFilterTodo = ({ setSearchParams, filterText }) => {
  const handleChange = ({ target }) => {
    setSearchParams({ filter: target.value });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">
          Filter:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInput"
          onChange={handleChange}
          value={filterText}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add to-do
      </button>
    </form>
  );
};

export default FormFilterTodo;
