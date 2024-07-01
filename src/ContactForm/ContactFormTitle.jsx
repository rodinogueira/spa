import iconImage from '../assets/icon-mail.png';
import React from 'react';

export const ContactFormTitle = () => (
  <div className='contact-form__title-container'>
    <img src={iconImage} alt='Icon' className='contact-form__icon' />
    <h2 className='contact-form__title'>
      GET IN<br />
      <span className='contact-form__title-bold'>TOUCH</span>
    </h2>
  </div>
);
