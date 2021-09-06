import React/*, { useState } */from 'react';
import './App.css';
// import Foo from './components/Foo';
import Game from './components/Game';

function App() {
  /*
  const [title, setTitle] = useState('Foo');
  const hello = (message: string) => {
    alert(message);
  }
  
  return (
    <div className="App">
     <Foo hello={hello} title={title}/>
     <input type="text" value={title} onChange={(e: any) => setTitle(e.target.value)} />
    </div>
  );*/

  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
