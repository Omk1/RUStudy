import './App.css';
import Table from './Table';
import {Users} from "./users";
import { useState } from 'react';
// import {db} from './firebase';
// import {uid} from './uid';

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];



  const search = (data) => {
    return data.filter((item) => 
      keys.some(key => item[key].toLowerCase().includes(query))
    )
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
