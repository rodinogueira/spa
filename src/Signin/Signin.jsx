import React, { useState } from 'react';
import { signin } from '../services/user';
import Cookies from 'js-cookie';
import logo from '../assets/image.png';
import PropTypes from 'prop-types';
import './styles.css';

const Signin = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await signin(formData);
      Cookies.set('token', token.data, { expires: 1 });
      onSubmit(formData);
      onClose();
    } catch (error) {
      console.log('Erro ao fazer login:', error.message);
    }
  };

  return (
    <div>
      <div className="signin__header">
        <div className="signin__logo-container">
          <img src={logo} alt="Logo" className="signin__logo" />
        </div>
        <div className="signin__title-and-body-container">
          <div className="signin__title-container">
            <h1 className="signin__title">Sign in</h1>
          </div>
          <div className="signin__body">
            <p className="signin__text">to access your list</p>
          </div>
        </div>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div>
          <label className="signin-form__input-label">User:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signin-form__input"
            required
          />
        </div>
        <div>
          <label className="signin-form__input-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signin-form__input"
            required
          />
        </div>
        <button type="submit" className="signin-form__submit-button">
          Entrar
        </button>
      </form>
    </div>
  );
};

Signin.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Signin;
