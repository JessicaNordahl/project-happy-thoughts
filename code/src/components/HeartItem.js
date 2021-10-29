import React from "react";
import moment from "moment";


const HeartItem = ({ thoughts, onLikesIncrease }) => {
    return (
    <div > 
        {thoughts.map((thought) => (
        <div key={thought._id}className="thought-wrapper">
            <p className="thought-input">{thought.message}</p>
            <button
                className="like-button" 
                onClick={() => onLikesIncrease(thought._id)}> 
                &hearts; {thought.hearts}
            </button>
            <p className="date">Thought written: {moment(thought.createdAt).fromNow()}</p>
        </div>
        ))}; 
    </div>
    )
}

export default HeartItem;