import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{width: '12rem'}}>
            <img src={props.imageurl} className="card-img-top" alt="Image of music" />
            <div className="card-body">
                <h5 className="card-title">{props.albumtitle}</h5>
                <p className="card-text">{props.albumdescription}</p>
                <a href="#" className="btn btn-primary">{props.buttontext}</a>
            </div>
        </div>
    )
}

export default Card;
