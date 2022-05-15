import './App.css';
import Greeting from './components/Greetings';
import Async from './components/Async';

function App() {
  return (
    <div className="App">
      <Async />
      <Greeting />
    </div>
  );
}

export default App;
