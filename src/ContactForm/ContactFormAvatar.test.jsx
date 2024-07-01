import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactFormAvatar } from './ContactFormAvatar';
import { describe, it, expect, jest } from '@jest/globals';

jest.mock('../assets/avatar.png', () => 'avatar.png');
jest.mock('../assets/grafismo.png', () => 'grafismo.png');

describe('ContactFormAvatar Component', () => {
  it('should render the avatar container with the correct class name', () => {
    render(<ContactFormAvatar />);
    const avatarContainer = screen.getByRole('img', { name: /Imagem Adicional/i });
    expect(avatarContainer).toHaveClass('contact-form__bg');
  });

  it('should render the avatar image with the correct class name', () => {
    render(<ContactFormAvatar />);
    const avatarImage = screen.getByRole('img', { name: /Avatar/i });
    expect(avatarImage).toHaveClass('contact-form__avatar-image');
  });

  it('should render the avatar image with the correct src attribute', () => {
    render(<ContactFormAvatar />);
    const avatarImage = screen.getByRole('img', { name: /Avatar/i });
    expect(avatarImage.src).toBe('http://localhost/avatar.png');
  });

  it('should render the background image with the correct src attribute', () => {
    render(<ContactFormAvatar />);
    const bgImage = screen.getByRole('img', { name: /Imagem Adicional/i });
    expect(bgImage.src).toBe('http://localhost/grafismo.png');
  });
});
