import React from 'react';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './HeroSection/HeroSection';
import MainSection from './MainSection/MainSection';
import TaskList from './TasksSection/TaskList';
import GoodThingsSection from './GoodThingsSection/GoodThingsSection';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Form } from './ContactForm';
import Protected from './ProtectedComponent';
const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário aqui
  };

  return (
    <AuthProvider>
      <main>
        <Header>
          <NavBar />
          <HeroSection />
        </Header>
        <MainSection />
        <Protected>
          <TaskList />
        </Protected>
        <GoodThingsSection />
        <Form.Root>
          <Form.Avatar />
          <Form.Title />
          <form className="contact-form__form" onSubmit={handleSubmit}>
            <Form.InputGroup
              label="Your name"
              type="text"
              placeholder="type your name here..."
              required
            />
            <div className="contact-form__input-group contact-form__input-group--split">
              <Form.InputGroup
                label="Email*"
                type="email"
                placeholder="example@example.com"
                required
              />
              <Form.InputGroup
                label="Phone*"
                type="tel"
                placeholder="( ) ____-____"
                required
              />
            </div>
            <Form.Textarea
              placeholder="Type what you want to say to us"
              required
            />
            <Form.SubmitButton>SEND NOW</Form.SubmitButton>
          </form>
        </Form.Root>
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default App;
