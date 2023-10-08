import './App.css';
import Table from './Table';
import {Users} from "./users";
import { useEffect, useState } from 'react';
import {db} from './firebase';
import {set, ref, onValue, child} from "firebase/database";
import {writeToDatabase, handleToChange} from './fireWrite';
import Accordion from 'react-bootstrap/Accordion';


function App() {
  const [query, setQuery] = useState("");
  const keys = ["title", "time", "loc"];

    const [title, setTitle] = useState("");
    //const [tag, setTag] = useState("");
    const [time, setTime] = useState("");
    const [loc, setLoc] = useState("");

    const [groups, setGroups] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const groupsRef = ref(db);
        onValue(groupsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const groupsArray = Object.values(data);
            setGroups(groupsArray);
          }
        });
      };
  
      fetchData();
    }, []);

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
        <button onClick={()=>writeToDatabase(title, time, loc, setTitle, setTime, setLoc)}>Submit</button>
      </form>
      {
          groups.map((data) => (
              <Table title={data.title}
                  time={data.time}
                  loc={data.loc} />
          ))
      }



    </div>
  );
}

export default App;