import React from "react";
import { Accordion } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Table = ({title, time, loc}) => {
    return (
        <div className="accordion">        
        <Row>
            <Accordion>
            <Accordion.Item >
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    <p>Time: {time}</p>
                    <p>Location: {loc}</p>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </Row>
    </div>

    )
}

export default Table;