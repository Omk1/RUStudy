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

  const [group, setGroup] = useState({});
  //const [tag, setTag] = useState("");


  const [groups, setGroups] = useState([{}]);
  //const [tag, setTag] = useState("");

  useEffect(() => {
    onValue(ref(db), snapshot =>{
      setGroup({});
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map((group) =>{
          setGroups(oldArray => [...oldArray, groups])
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

      <input type="text" value={group.title} onChange={(e) => handleToChange(e, setGroup)}></input>
      <button onClick={()=>writeToDatabase(group)}></button>
      {groups.map((title) => (
        <>
          <h1>{group.title}</h1>
        </>
      ))}

      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
