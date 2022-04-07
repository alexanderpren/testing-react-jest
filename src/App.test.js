import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('buttton has correct initial color and text', () => {
  render(<App />);
  //find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  //expect the background color initially to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  //click button
  fireEvent.click(colorButton);

  //Expect th background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  //expect the text change to "Change to red"
  expect(colorButton.textContent).toBe('Change to red');
 
});






