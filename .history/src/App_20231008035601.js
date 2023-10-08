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
  //const [tag, setTag] = useState("");
  const [time, setTime] = useState("");
  const [loc, setLoc] = useState("");


  const [bros, setBros] = useState([]);

  useEffect(() => {
    onValue(ref(db), snapshot =>{
      setBros([]);
      const data = snapshot.val();
      if(data !== null){
        Object.values(data).map((bro) =>{
          setBros(oldArray => [...oldArray, bro])
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

      <input type="text" value={title} onChange={(e) => handleToChange(e, setTitle)}></input>
      <input type="text" value={time} onChange={(e) => handleToChange(e, setTime)}></input>
      <input type="text" value={loc} onChange={(e) => handleToChange(e, setLoc)}></input>
      <button onClick={()=>writeToDatabase(title, time, loc, setTitle, setTime, setLoc)}></button>
      {bros.map((bro) => (
        <>
          <h1>{bro.bro}</h1>
        </>
      ))}

      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
