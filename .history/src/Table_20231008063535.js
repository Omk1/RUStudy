import React from "react";
import { Accordion } from "react-bootstrap";


const Table = ({title, time, loc}) => {
    return (
        <Accordion.Item>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
            {time}{loc}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Table;