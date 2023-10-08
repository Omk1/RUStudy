
import Table from './ColinLee/Table';
import { useEffect, useState } from 'react';
import {db} from './ColinLee/firebase';
import {ref, onValue} from "firebase/database";
import {writeToDatabase} from './ColinLee/fireWrite';

import { Container, Row } from 'react-bootstrap';
import Navbar from './Navbar';
import About from './About';
import "./ColinLee/ColinLee.css"; 
import './ColinLee/custom.scss';



function Groups() {


    
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
          <h1>Groups</h1>
          <input 
          placeholder="Search..." 
          className="search" 
          onChange={e=> setQuery(e.target.value.toLowerCase())}/>
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

export default Groups;