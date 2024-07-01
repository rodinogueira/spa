import React from 'react';
import imagem from '../assets/02.jpg'
import './styles.css';

const HeroSection = () => (
  <aside className='hero-section'>
    <div className='hero-section__container'>
      <div className='hero-section__content'>
        <h1 className='hero-section__title'>Organize</h1>
        <h2 className='hero-section__subtitle'>your daily jobs</h2>
        <p className='hero-section__paragraph'>The only way to get things done</p>
        <a 
          href='#'
          className='hero-button btn btn-green'
        >
          Go To To-Do List
        </a>
      </div>
      <div className='hero-section__image'>
        <img src={imagem} alt='Descrição da imagem' />
      </div>
    </div>
  </aside>
);

export default HeroSection;
