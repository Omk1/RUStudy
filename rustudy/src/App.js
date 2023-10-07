import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [title, setTitle] = useState('');

  return (
    <div className="create">
      <form>
        <label>Title: </label>
        <input 
          type = "text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Time: </label>
        <input type = "text" />
        <label>Location: </label>
        <input type = "text" />

        <button>Create</button>
        <p>{ title }</p>
      </form>
    </div>
  );
}

export default App;
