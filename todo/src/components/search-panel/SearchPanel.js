
import React from "react";

import './SearchPanel.css';

const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search';
  const searchStyle = {
    fontSize: '20px'
  };
  return (
    <input
      className="form-control search-input"
      style={searchStyle} type="text" placeholder={searchPlaceholder}/>
  );
};

export default SearchPanel;