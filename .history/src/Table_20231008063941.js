import React from "react";
import { Accordion } from "react-bootstrap";


const Table = ({title, time, loc, eventKey}) => {
    return (
        <Accordion.Item eventKey="1">
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
            {/* {time}{loc} */}
            BROOO
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Table;