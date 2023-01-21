import React from "react";

class Card extends React.Component
{
    handleButtonClick = (event) =>
    {
        console.log("ID clicked is " + this.props.albumId);
        this.props.onClick(this.props.albumId);
    }

    render()
    {
        return (
            <div className="card" style= {{width: '18rem'}}>
                <img src={"assets/images/" + this.props.imgURL} className="card-img-top" alt="Test Name"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.albumTitle}</h5>
                    <p className="card-text">{this.props.albumDescription}</p>
                    <a href="#" onClick={this.handleButtonClick} className="btn btn-primary">{this.props.buttonText}</a>
                </div>
            </div> )
    }
}

export default Card;