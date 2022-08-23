import React from 'react';
import '../styles/Coin.css'

const Coin = ({name,image,price, symbol,pricechange}) => {
    return (
        <div className='container111'>
            <img src={image} alt={name} className='image'/>
            <span className='name'>{name}</span>
            <span className='symbol'>{symbol.toUpperCase()}</span>
            <span className='curprice'>{price}</span>
            <span className={pricechange >0 ? "green" : "red"}>{pricechange}</span>
        </div>
    );
};

export default Coin;