import React from 'react';
import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const {quoteId} = useParams();

  return (
    <section>
      <h1> Quote Detail Page</h1>
      <p> Quote Id : {quoteId}</p>
    </section>
    
  );
};

export default QuoteDetail;
