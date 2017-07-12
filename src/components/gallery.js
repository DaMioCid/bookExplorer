import React, { Component } from 'react';

export default class Gallery extends Component {
    handleDisplay() {
        return this.props.items ?
            this.props.items.map(this.handleItems)
            : <img className='no-content' src='https://cdn2.sg.orstatic.com/images/v4/previewimg/sr1-icon-noResult.png' />
    }
    handleItems(item) {
        let missingImg = 'https://cdn3.iconfinder.com/data/icons/dental-blue-icons/512/Untitled-6.png';
        let { id } = item;
        let { title, imageLinks, infoLink } = item.volumeInfo;

        return (
            <a
                key={id}
                className='book'
                href={infoLink}
                target='_blank'>
                <img
                    src={imageLinks !== undefined ? imageLinks.thumbnail : missingImg} alt='book image'
                    className='book-img' />
                <div className='book-text'>
                    {title}
                </div>
            </a>
        )
    }
    render() {
        return (
            <div className='gallery'>
                {this.handleDisplay()}
            </div>
        )
    }
}