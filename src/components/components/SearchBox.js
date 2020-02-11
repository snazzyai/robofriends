import React from 'react';

const Search = (props) => {

    return (
        <div>
            <input type="text" onChange={props.handleChange} placeholder="Search Robot" />
        </div>
    )
}

export default Search;