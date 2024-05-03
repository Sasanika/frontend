import React from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker : string;
  price: number;
}

const Card = ({companyName, ticker, price} : Props) => {
  return (
    <div className='card'>
        <h1>Card title</h1>
        <div className='details'>
            <h2>{companyName}</h2>
            <p>{ticker}</p>
            <p>{price}</p>

        </div>
        <p className='infon'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quasi minima voluptate eveniet ullam reprehenderit ea optio tenetur, atque nulla id maiores molestias nobis cumque fugiat. Nesciunt at accusantium delectus.</p>
    </div>
  )
};

export default Card;