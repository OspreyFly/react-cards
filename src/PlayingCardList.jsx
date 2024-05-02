import React from 'react';
import { useAxios } from './hooks';
import PlayingCard from './PlayingCard';
import './CardTable.css';

function CardTable() {
  const { data: cards, addData: addCard } = useAxios('https://deckofcardsapi.com/api/deck/new/draw/?count=1', []);

  const handleAddCard = () => {
    addCard('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;

