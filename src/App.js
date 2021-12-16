import './App.css';
import { useState } from 'react';
import UseCoronaData from './useCoronaData';

function App(){

  const [value, setValue] = useState('');

  const data = UseCoronaData(value)

  let confirmed;
  let name;

  if(data !== undefined){
    confirmed = data.latest_data.confirmed;
    name = data.name
  }

  return (
    <div className='App'>
      <input
        type='text'
        value={value}
        onChange={evt => {
          setValue(evt.target.value)
        }}
        />
        <h1>{name} {confirmed}</h1>
    </div>
  )
}

export default App;