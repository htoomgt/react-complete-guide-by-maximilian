import {render, screen} from '@testing-library/react';
import Async from './Async.js'

describe('Async component', () => {
    test('renders posts if request succeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async () => [{ id : 'p1', title : 'First Post'}],
        });

        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});