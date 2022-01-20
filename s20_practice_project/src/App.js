import { Switch, Route, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
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
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
