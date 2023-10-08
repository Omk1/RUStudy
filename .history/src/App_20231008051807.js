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

  
  // const [title, setTitle] = useState("");
  // //const [tag, setTag] = useState("");
  // const [time, setTime] = useState("");
  // const [loc, setLoc] = useState("");

  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState({title:"", time:"", loc:""});
  // //const [tag, setTag] = useState("");


  useEffect(() => {
    onValue(ref(db), snapshot =>{
      setGroups([]); 
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map((title, time, loc) => {
          const obj = {title: title, time: time, loc: loc};
          setGroups(oldArray => [...oldArray, obj]);
        });
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
        <input type="text" value={group.title} onChange={(e) => setGroup({ ...group, title: e.target.value })}></input>
        <label>Time: </label>
        <input type="text" value={group.time} onChange={(e) => setGroup({ ...group, time: e.target.value })}></input>
        <label>Location: </label>
        <input type="text" value={group.loc} onChange={(e) => setGroup({ ...group, loc: e.target.value })}></input>
        <label>Subject: </label>
        <button onClick={()=>writeToDatabase(group, setGroup)}>Submit</button>
      </form>
      <div className="inline">
        {groups.map((group) => (
          <div key={group.id}>
            <h1>{group.title}</h1>
            <p>{group.time}</p>
            <p>{group.loc}</p>
          </div>
        ))}
      </div>

      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
