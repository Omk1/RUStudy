import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import database from './firebase';
 
function App() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState();

  // Push Function
  const Push = () => {
     database.ref("user").set({
      name: name,
      age: age,
    }).catch(alert);
  }

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
        <input
          type = "text" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label>Location: </label>
        <input type = "text" />

        <button onClick={Push}>Create</button>
        <p>{ title }</p>
      </form>
    </div>
  );
}

export default App;
