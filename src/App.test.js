import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('Calculator Component', () => {
  test('renders calculator display with initial value 0', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toHaveTextContent('0');
  });

  test('handles number clicks and updates display', () => {
    render(<App />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    expect(screen.getByRole('textbox')).toHaveTextContent('123');
  });

  test('handles operator clicks and stores first operand', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByRole('textbox')).toHaveTextContent('0'); // Display should reset after operator
  });

  test('performs addition correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox')).toHaveTextContent('5');
  });

  test('performs subtraction correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox')).toHaveTextContent('3');
  });

  test('performs multiplication correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox')).toHaveTextContent('48');
  });

  test('performs division correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox')).toHaveTextContent('3');
  });

  test('handles clear button correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('C'));
    expect(screen.getByRole('textbox')).toHaveTextContent('0');
  });

  test('handles decimal button correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    expect(screen.getByRole('textbox')).toHaveTextContent('1.5');
  });

  test('handles toggle sign button correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByRole('textbox')).toHaveTextContent('-7');
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByRole('textbox')).toHaveTextContent('7');
  });

  test('handles percentage button correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('%'));
    expect(screen.getByRole('textbox')).toHaveTextContent('0.05');
  });

  test('starts a new calculation after pressing equals', () => {
    render(<App />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox')).toHaveTextContent('5');
    fireEvent.click(screen.getByText('4'));
    expect(screen.getByRole('textbox')).toHaveTextContent('4'); // Should start new number input
  });

  test('performs chained operations correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByRole('textbox')).toHaveTextContent('20');
  });
});