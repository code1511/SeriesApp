import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
        /*passing image values as props
        */
            <img src={props.val} alt="this picture" className="img_c" />
            <div className="card_info">
            <span className="card_category">A Original Netflix Series. </span>
            <h3 className="card_title">{props.name}</h3>
            <a href="https://www.netflix.com/in/">
                <button> watch  now</button>
            </a>
            </div>
        </div>
    )
}
