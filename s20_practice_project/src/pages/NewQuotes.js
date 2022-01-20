import React from 'react';
import QuoteForm from  '../components/quotes/QuoteForm';

const NewQuotes = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  }


  return <QuoteForm onAdd={addQuoteHandler} />;
};

export default NewQuotes;
