import React from "react";
import { Accordion } from "react-bootstrap";


const Table = ({title, time, loc}) => {
    return (
        <div>
            <button class="accordion">{title}</button>
            <div class="panel">
                <p>Time: {time}</p>
                <p>Location: {loc}</p>
            </div>
        </div>
    )
}

export default Table;