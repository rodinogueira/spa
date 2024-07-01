import React, { useState } from 'react';
import { Modal } from '../../Modal';
import Signin from '../../Signin/Signin';
import { useAuth } from '../../context/AuthContext';
import logoImage from '../../assets/Logo.png';
import './styles.css';
const NavBar = () => {
  const { user, logout, login } = useAuth();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (formData) => {
    try {
      await login(formData);
      setIsModalOpened(false);
      setLoginError(null);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo-container">
        <img src={logoImage} alt="Logo" className="nav-bar__logo-image" />
      </div>
      <div className="nav-bar__auth-controls">
        {!user ? (
          <div>
            <button className="nav-bar__auth-button--login" onClick={openModal}>
              entrar
            </button>
            <Modal.Root isOpened={isModalOpened}>
              <Modal.CloseButton onClose={closeModal} />
              <Modal.Content>
                <Signin
                  onClose={() => setIsModalOpened(false)}
                  onSubmit={handleLogin}
                />
              </Modal.Content>
            </Modal.Root>
            {loginError && <p className="nav-bar__login-error">{loginError}</p>}
          </div>
        ) : (
          <div>
            <button className="nav-bar__auth-button--logout" onClick={logout}>
              sair
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
