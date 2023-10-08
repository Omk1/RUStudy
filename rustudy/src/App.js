import './App.css';
import { useState } from 'react';
import {db} from './firebase';
import {set, ref} from "firebase/database"
import {uid} from "uid";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [loc, setLoc] = useState("");
  const [sub, setSub] = useState("Mathematics");

  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title,
      time,
      loc,
      sub,
      uuid,
    });

    setTitle("");
    setTime("");
    setLoc("");
    setSub("Mathematics");
  }


  return (
    <div className="create">
      <form>
        <label>Title: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <label>Time: </label>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)}></input>
        <label>Location: </label>
        <input type="text" value={loc} onChange={(e) => setLoc(e.target.value)}></input>
        <label>Subject: </label>
        <select
          value={sub}
          onChange={(e) => setSub(e.target.value)}
        >
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Economics">Economics</option>
          <option value="Business">Business</option>
        </select>
        <button onClick={writeToDatabase}>Submit</button>
      </form>
    </div>
  );
}

export default App;