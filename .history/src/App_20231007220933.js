import './App.css';
import {Users} from "./users";

function App() {
  const [query, setQuery] = useState("");

  console.log(query);
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search" onChange={e=> setQuery(e.target.value)}/>
        {Users.map(user=>(
          <li className="listItem">{user.first_name}</li>
        ))}
    </div>
  );
}

export default App;
