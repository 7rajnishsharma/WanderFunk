import React from 'react'

export default function Hero(props) {
    return (
        <>
            <div className={props.cName} >
                <img src={props.heroImg} alt="pic"/>
            </div>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>

        </>
    )
}
