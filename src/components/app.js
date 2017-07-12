import React, { Component } from 'react'

import SearchBar from './search-bar';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Book Explorer</h1>
                <SearchBar />
            </div >
        )
    }

}