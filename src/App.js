import React, { Component } from 'react';

import Search from './Search';
import Card from './Card';
import filterCharacters from './filterCharacters';

import './App.css';

class App extends Component {
    state = {
        filteredCharacters: filterCharacters('')
    };

    handleSearchChange = (e) => {
        this.setState({
            filteredCharacters: filterCharacters(e.target.value),
        });
    }

    render() {
        return (
            <div className="container">
                <Search onTextChange={this.handleSearchChange} />

                {
                    this.state.filteredCharacters.map((character, index) =>
                        <Card
                            key={index}
                            name={character.name}
                            image={character.image}
                            description={character.description}
                        />
                    )
                }
            </div>
        );
    }
}

export default App;
