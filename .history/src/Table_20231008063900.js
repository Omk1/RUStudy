import React from "react";
import { Accordion } from "react-bootstrap";


const Table = ({title, time, loc, eventKey}) => {
    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
            {time}{loc}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Table;