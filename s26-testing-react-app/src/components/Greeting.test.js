import { render, screen } from '@testing-library/react';
import Greeting from './Greetings.js';


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
});


