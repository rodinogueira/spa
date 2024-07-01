import React, { useState, useRef } from 'react';
import card1Image from '../assets/card-one.png';
import card2Image from '../assets/card-two.png';
import card3Image from '../assets/card-three.png';
import iconeCoopers from '../assets/icone-coopers.png';
import './styles.css';

const GoodThingsSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef(null);

  const cards = [
    {
      id: 1,
      imageSrc: card1Image,
      title: 'function',
      link: '/card1',
      description: 'Organize your daily job enhance your life performance.',
    },
    {
      id: 2,
      imageSrc: card2Image,
      title: 'function',
      link: '/card2',
      description:
        'Mark one activity as done makes your brain understands the power of doing.',
    },
    {
      id: 3,
      imageSrc: card3Image,
      title: 'function',
      link: '/card3',
      description:
        'Careful with missunderstanding the difference between a list of things and a list of desires.',
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  const handleBulletClick = (index) => {
    setCurrentPage(index);
    scrollToPage(index);
  };

  const scrollToPage = (pageIndex) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: pageIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleImageClick = (index) => {
    setCurrentPage(index);
    scrollToPage(index);
  };

  return (
    <section className="good-things-section">
      <div className="good-things-section__green-box">
        <h1 className="good-things-section__green-box-heading">good things</h1>
      </div>
      <div className="good-things-section__carousel-container">
        <div className="good-things-section__carousel" ref={carouselRef}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="good-things-section__card"
              onClick={() => handleCardClick(card.id)}
            >
              <img
                src={card.imageSrc}
                alt={card.title}
                onClick={() => handleImageClick(index)}
              />
              <a href="#" className="good-things-section__link">
                function
              </a>
              <p>{card.description}</p>
              <a href={card.link} className="good-things-section__read-more">
                Read More
              </a>
              <div className="good-things-section__icone-coopers">
                <img src={iconeCoopers} alt="Additional Image" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="good-things-section__bullets">
        {cards.map((card, index) => (
          <span
            key={card.id}
            className={`good-things-section__bullet ${index === currentPage ? 'good-things-section__bullet--active' : ''}`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default GoodThingsSection;
