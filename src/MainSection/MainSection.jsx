import React from 'react';
import pathDivider from '../assets/path-6.png';
import './styles.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="centered-content">
        <h2>To-do List</h2>
      </div>
      <img
        src={pathDivider}
        alt="divider"
        style={{
          width: '293px',
          height: 'auto',
          margin: '20px 0',
        }}
      />
      <div className="content">
        <p>
          Drag and drop to set your main priorities, check <br /> when done and
          create what´s new.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
