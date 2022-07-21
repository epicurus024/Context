
import { useContext, useEffect } from 'react';
import './App.css';
import context from './Context/Creation';


function App() {

  const a = useContext(context);
  useEffect(()=> {
    a.update();
  }, [])
  return (
    <div className="App">
      <p>hello i am {a.state.name}</p>
    </div>
  );

  return (
    <div className="App">
      <p>hello i am {a.name}</p>
    </div>
  );


}

export default App;
