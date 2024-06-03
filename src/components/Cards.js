import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards' >
            <h1> Check out these epic destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='assets/img-9.jpg'
                            text='Explore The Hidden Waterfall deep within the Amazin Rainforest'
                            label='adventure'
                            path='/services' />
                        <CardItem
                            src='assets/img-2.jpg'
                            text='Explore The Hidden Waterfall deep within the Amazin Rainforest'
                            label='adventure'
                            path='/services' />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='assets/img-9.jpg'
                            text='Explore The Hidden Waterfall deep within the Amazin Rainforest'
                            label='adventure'
                            path='/services' />
                        <CardItem
                            src='assets/img-2.jpg'
                            text='Explore The Hidden Waterfall deep within the Amazin Rainforest'
                            label='adventure'
                            path='/services' />
                        <CardItem
                            src='assets/img-3.jpg'
                            text='Explore The Hidden Waterfall deep within the Amazin Rainforest'
                            label='adventure'
                            path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards