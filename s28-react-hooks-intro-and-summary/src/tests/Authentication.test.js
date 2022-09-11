import { render, screen,  } from '@testing-library/react';
import {AuthContext} from '../context/auth-context';
import App from '../App';


test('page is not authenticated', () => {

    render(
        <AuthContext.Provider value ={{isAuth: false}} >
            <App />
        </AuthContext.Provider>
    );

    expect(screen.getByText("Log In")).toBeInTheDocument();

})

test('page is authenticated', () => {

    render(
        <AuthContext.Provider value ={{isAuth: true}} >
            <App />
        </AuthContext.Provider>
    );

    expect(screen.getByText("Loaded Ingredients")).toBeInTheDocument();

})