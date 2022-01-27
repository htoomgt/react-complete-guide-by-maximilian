import React, { Suspense } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
      <Switch >
        <Route exact path="/" >
          <Redirect to="quotes" />
        </Route>
        <Route path="/quotes" exact >
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId" >
          <QuoteDetail />    
        </Route>
        <Route path="/new-quote" exact >
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
