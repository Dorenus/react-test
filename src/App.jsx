import { useEffect, useState } from 'react';
import './App.css';
import Jokes from './components/Jokes';
// import axios from 'axios';

function App() {



  const [joke, setJokes] = useState(null);

  useEffect(()=> {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then((res) => res.json())
        .then((data) => setJokes(data));

    }, []);


// useEffect(() => {
//         axios.get('/')
//         .then(res => setJokes(res.data.map(b => ({...b, show: true}))));
//         }, []);

  
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <ul>
           {
             joke?.map((b, i) => <Jokes key={i} joke={b} />)
           }
        </ul>
        </div>
        
        <button>Get jokes</button>
      </header>
    </div>
  );
}

export default App;
