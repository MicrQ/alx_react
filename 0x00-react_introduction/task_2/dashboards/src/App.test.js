import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Assuming App component is in a separate file

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders App-header div', () => {
    render(<App />);
    const appHeader = screen.getByTestId('App-header');
    expect(appHeader).toBeInTheDocument();
  });

  it('renders App-body div', () => {
    render(<App />);
    const appBody = screen.getByTestId('App-body');
    expect(appBody).toBeInTheDocument();
  });

  it('renders App-footer div', () => {
    render(<App />);
    const appFooter = screen.getByTestId('App-footer');
    expect(appFooter).toBeInTheDocument();
  });
});
