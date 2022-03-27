import React from 'react';

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="col col-sm-4">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control"
        placeholder="Type To Search"
        type="text"
      />
    </div>
  );
};

export default SearchBox;
