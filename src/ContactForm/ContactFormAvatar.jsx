import React from 'react';
import avatarImage from '../assets/avatar.png';
import grafismoBG from '../assets/grafismo.png';

export const ContactFormAvatar = () => (
  <div className="contact-form__avatar-container">
    <img src={grafismoBG} alt="Imagem Adicional" className="contact-form__bg" />
    <div className="contact-form__avatar">
      <img
        src={avatarImage}
        alt="Avatar"
        className="contact-form__avatar-image"
      />
    </div>
  </div>
);
