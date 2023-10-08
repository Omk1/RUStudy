import './App.css';
import Table from './Table';
import {Users} from "./users";
import { useEffect, useState } from 'react';
import {db} from './firebase';
import {set, ref, onValue} from "firebase/database";
import {writeToDatabase, handleToChange} from './fireWrite';

function App() {
  const [query, setQuery] = useState("");
  const keys = ["title", "tag", "loc"];

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [loc, setLoc] = useState("");
  const [sub, setSub] = useState("Mathematics");

  useEffect(() => {
    onValue(ref(db), snapshot =>{
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map((group) =>{
          setGroups(oldArray => [...oldArray, groups])
        });
      }else{
        setGroups([]);
      }
    });
  }, [])

  const search = (data) => {
    return data.filter((item) => 
      keys.some(key => item[key] && item[key].toLowerCase().includes(query))
    )
  }

  return (
    <div className="app">
      <input type="text" 
      placeholder="Search..." 
      className="search" 
      onChange={e=> setQuery(e.target.value.toLowerCase())}/>

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
        <button onClick={writeToDatabase}>submit</button>
      </form>

      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
