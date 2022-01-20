import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Commments from '../components/comments/Comments';


const QuoteDetail = () => {
  const {quoteId} = useParams();

  return (
    <section>
      <h1> Quote Detail Page</h1>
      <p> Quote Id : {quoteId}</p>
     
      <Route path={`/quotes/${quoteId}/comments`} > 
        <Commments />
      </Route>
    </section>
    
  );
};

export default QuoteDetail;
