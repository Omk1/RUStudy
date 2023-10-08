import './App.css';
import Table from './Table';
import {Users} from "./users";
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) => 
    item.first_name.toLowerCase().includes(query) || 
    item.last_name.toLowerCase().includes(query) || 
    item.email.toLowerCase().includes(query))
  }

  console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")));
  return (
    <div className="app">
      <input type="text" 
      placeholder="Search..." 
      className="search" 
      onChange={e=> setQuery(e.target.value.toLowerCase())}/>
      <Table data={search(Users)}/>
    </div>
  );
}

export default App;
