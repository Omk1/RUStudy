import React from "react";
import { Accordion } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Table = ({title, time, loc}) => {
    return (
        <Accordion fluid="md">
        <Accordion.Item >
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <p>Time: {time}</p>
                <p>Location: {loc}</p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    )
}

export default Table;