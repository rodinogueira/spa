import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

it('should render footer element with correct class name', () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector('.footer');
    expect(footerElement).toBeInTheDocument();
});

jest.mock('../../assets/footer-bg.png', () => '');

it('should handle missing footer background image gracefully', () => {
  const { container } = render(<Footer />);
  const imgElement = container.querySelector('.footer__image');
  expect(imgElement).toBeInTheDocument();
  expect(imgElement.src).toBe('http://localhost/');
});