import React, { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Commments from '../components/comments/Comments';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

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


const QuoteDetail = () => {
  const match = useRouteMatch();

  const {quoteId} = useParams();

  const { sendRequest, status, data : loadedQuote, error} =  useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);

  }, [sendRequest, quoteId])



  // const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);
  const quote = loadedQuote;

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

  if(!quote.text) {
    return <NoQuotesFound />
  }

  return (
    <section>
      <h1> Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}> Load Comments</Link>

        </div>

      </Route>

     
      <Route path={`${match.path}/comments`} > 
        <Commments />        
      </Route>
    </section>
    
  );
};

export default QuoteDetail;
