import React from 'react';
import BasicForm from './components/BasicForm';

import SimpleInput from './components/SimpleInput';

function App() {
  return (
    <div className='app'> 
      <h2>Simple Form</h2>
      <SimpleInput  />
      <div className="mt-8"></div>

      <h2>Basic Form</h2>
      <BasicForm />
    </div>
  );
}

export default App;
