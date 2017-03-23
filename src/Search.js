import React, { Component } from 'react';

class Search extends Component {
    handleChange = (e) => {
        this.props.onTextChange(e);
    }

    render() {
        return (
            <div className="search">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Marvel Characters"
                    autoFocus
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Search;
