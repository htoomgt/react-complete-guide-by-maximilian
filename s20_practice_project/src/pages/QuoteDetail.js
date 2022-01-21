import React from 'react';
import { useParams, Route, Link } from 'react-router-dom';

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
  const {quoteId} = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  if(!quote) {
    return <NoQuotesFound />
  }

  return (
    <section>
      <h1> Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}> Load Comments</Link>

        </div>

      </Route>

     
      <Route path={`/quotes/${quoteId}/comments`} > 
        <Commments />        
      </Route>
    </section>
    
  );
};

export default QuoteDetail;
