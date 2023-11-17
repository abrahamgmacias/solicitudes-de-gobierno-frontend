import React from 'react';


export default function LeftArrow(props) {
    return (
        <div>
            <span className={props.className} onClick={props.onClick}>{props.text}</span>
        </div>
    )
}