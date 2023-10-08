import './App.css';
import {Users} from "./users";
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");

  console.log(query);
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search" onChange={e=> setQuery(e.target.value)}/>
        {Users.map(user=>(
          <li className="listItem" key={user.id}>{user.first_name}</li>
        ))}
    </div>
  );
}

export default App;
