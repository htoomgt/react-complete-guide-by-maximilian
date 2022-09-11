import { render, screen,  } from '@testing-library/react';
import App from '../App';
import Ingredients from "../components/Ingredients/Ingredients"


test('renders login page', () => {
  

  render(<App />);
  const linkElement = screen.getByText("Log In");
  expect(linkElement).toBeInTheDocument();
  
  
});


test('renders ingredients', () => {
  

  render(<Ingredients />);
  const addIngredientButton = screen.getByText(/add ingredient/i);
  const loadedIngredientHeader = screen.getByText(/Loaded Ingredients/i);

  expect(addIngredientButton).toBeInTheDocument();
  expect(loadedIngredientHeader).toBeInTheDocument();
  
  
});

