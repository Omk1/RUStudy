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
      <>
      <Row>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </Row>
      <br />
    </>
      <container>
          <input 
          placeholder="Search..." 
          className="search" 
          onChange={e=> setQuery(e.target.value.toLowerCase())}/>
        <form>
          <Row>
            <label>Title: </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
          </Row>
          <Row>
            <label>Time: </label>
            <input type="text" value={time} onChange={(e) => setTime(e.target.value)}></input>
          </Row>
          <Row>
            <label>Location: </label>
            <input type="text" value={loc} onChange={(e) => setLoc(e.target.value)}></input>
          </Row>
          <Row>
            <label>Subject: </label>
            <select value={tag} onChange={(e) => setTag(e.target.value)}>
                <option value="" className="gray">Choose a subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Economics">Economics</option>
                <option value="Business">Business</option>
            </select>
          </Row>
          <button className="submit" onClick={()=>writeToDatabase(title, time, loc, tag, setTitle, setTime, setLoc, setTag)}>Submit</button>
        </form>
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