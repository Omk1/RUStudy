import React from "react";
import { Accordion } from "react-bootstrap";


const Table = ({title, time, loc, eventKey}) => {
    return (
        <Accordion.Item>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                <p>Time: {time}</p>
                <p>Location: {loc}</p>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Table;