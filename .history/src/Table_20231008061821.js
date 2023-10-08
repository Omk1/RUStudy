import React from "react";

const Table = ({title, time, loc}) => {
    return (
        <table>
            <tbody>
                <tr>
                </tr>
                    <tr key={title}>
                        <td>{time}</td>
                        <td>{loc}</td>
                    </tr>
            </tbody>
        </table>
    )
}

export default Table;