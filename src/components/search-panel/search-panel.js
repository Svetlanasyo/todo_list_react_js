import React from "react";
import './search-panel.css'

const SearchPanel = ({onSearch}) => {

    const searchText = 'Type here to search';
    return (<input
        placeholder={searchText}
        className="input-group"
        onChange={onSearch}
    />);
};

export default SearchPanel;