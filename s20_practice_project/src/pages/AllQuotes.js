import React, { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

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
  const {sendRequest, status, data : loadedQuotes, error} = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if(status === 'pending'){
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(error){
    return (
      <p className='centered focused'>{error}</p>
    );
  }

  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length  === 0)){
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
