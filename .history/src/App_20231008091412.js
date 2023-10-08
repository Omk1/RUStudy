import './App.css';
import Table from './Table';
import { useEffect, useState } from 'react';
import {db} from './firebase';
import {ref, onValue} from "firebase/database";
import {writeToDatabase} from './fireWrite';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './custom.scss'


function App() {
  const [query, setQuery] = useState("");
  const keys = ["title", "time", "loc", "tag"];

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
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
      keys.some((key) => {
        const itemValue = item[key];
        return itemValue && itemValue.toLowerCase().includes(query.toLowerCase());
      })
    );
  }

  return (
    <div className="app">
      <container>
          <input 
          placeholder="Search..." 
          className="search" 
          onChange={e=> setQuery(e.target.value.toLowerCase())}/>
          <h1>Groups</h1>
          {
            search(groups).map((data) => (
                <Table title={data.title}
                    time={data.time}
                    loc={data.loc} 
                    tag={data.tag}
                    />
            ))
          }
        </container>
    </div>
  );
}

export default App;