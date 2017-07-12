import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

import Gallery from './gallery'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: 'react',
            items: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleSearch() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

        fetch(`${BASE_URL}${this.state.query}&maxResults=16`, { method: 'GET' }).then(response => response.json()).then(json => {
            let { items } = json;
            this.setState({ items })
        });
    }
    handleChange(e) {
        this.setState({
            query: e.target.value
        })
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    }
    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search for a Book'
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress} />
                        <InputGroup.Addon onClick={this.handleSearch}>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items} />
            </div>
        )
    }
}