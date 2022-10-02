import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [hrlH, setHeartLimitH] = useState(0);
  const [hrlL, setHeartLimitL] = useState(0);

  function HeartRate() {
    setHeartLimitH((220 - age) * 0.85);
    setHeartLimitL((220 - age) * 0.65);
  }

  return (
    <div>
      <h3>Heart rate limits calculator</h3>
      <form>
        <div>
          <label>Age: </label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label> Heart rate limits: </label> 
          <output>{hrlL.toFixed(2)}{"-"}{hrlH.toFixed(2)}</output>
        </div>
        <button type="button" onClick={HeartRate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
