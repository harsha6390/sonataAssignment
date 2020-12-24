import React from 'react';
import SearchBar from './SearchBar';
import ShowList from './ShowList';
import axios from 'axios';

class App extends React.Component {
    state = { shows: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.tvmaze.com/search/shows', {
            params: { q: term },
        });
        // console.log(response.data)
        this.setState({ shows: response.data });

    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ShowList shows={this.state.shows} />
            </div>
        );
    }

}

export default App;