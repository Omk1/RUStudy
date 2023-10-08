import React from "react";

const Table = ({title, time, loc}) => {
    return (
        <table>
            <tbody>
                <td>{title}</td>
                <td>{time}</td>
                <td>{loc}</td>
            </tbody>
        </table>
    )
}

export default Table;