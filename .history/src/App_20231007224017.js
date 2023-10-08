import './App.css';
import Table from './Table';
import {Users} from "./users";
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");

  console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")));
  return (
    <div className="app">
      <input type="text" 
      placeholder="Search..." 
      className="search" 
      onChange={e=> setQuery(e.target.value.toLowerCase())}/>
        {/* {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map(user=>(
          <li className="listItem" key={user.id}>{user.first_name}</li>
        ))} */}
      <Table data={Users.js}/>
    </div>
  );
}

export default App;
