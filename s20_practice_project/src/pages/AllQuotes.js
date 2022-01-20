import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
  {
    id : 'q1',
    author : 'Max',
    text : 'Learn React is fun',
  },
  {
    id : 'q2',
    author : 'Htoo Maung',
    text : 'Learn new technologies takes next level!',
  },
  {
    id : 'q3',
    author : 'unknown',
    text : 'Regular practice is the key to success',
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
