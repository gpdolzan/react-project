import React from "react";

const Card = (props) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robot' />
            <div>
                <h2>User: {props.username}</h2>
                <h3>Name: {props.name}</h3>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}

export default Card