import './App.css';
import {Users} from "./users";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search" />
        {Users.map(user=>(
          <li className="listItem">{user.first_name}</li>
        ))}
    </div>
  );
}

export default App;
