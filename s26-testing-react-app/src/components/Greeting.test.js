import { render, screen } from '@testing-library/react';
import Greeting from './Greetings.js';
import  userEvent from '@testing-library/user-event';
describe('<Greeting component', () => {

    test('renders Hello World as text', ()=> {
        // Arrange 
        render(<Greeting />);
    
    
        // Act
    
        //...nothing
    
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    
    
    });


    test('renders good to see you if the button was NOT clicked', () => {
        // Arrange
        render(<Greeting />);


        // Act
        // ...nothing

        


        // Asset
        const outputElement = screen.getByText('It is good to see you', {exact: false});
        expect(outputElement).toBeInTheDocument();
    })

    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);


        // Act
        const buttonElement = screen.getByRole('button'); 
        userEvent.click(buttonElement);


        
         // Asset
         const outputElement = screen.getByText('changed', {exact: false});
         expect(outputElement).toBeInTheDocument();


    })

    test('does not render "good to  see you" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);


        // Act
        const buttonElement = screen.getByRole('button'); 
        userEvent.click(buttonElement);

        // Assets
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();
    })
});


