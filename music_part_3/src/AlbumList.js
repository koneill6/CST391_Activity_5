import React from "react";
import Card from "./Card";

class AlbumList extends React.Component
{
    handleSelectionOne = (albumId) =>
    {
        console.log("Selected ID is " + albumId);
        this.props.onClick(albumId);

    }

    render ()
    {
        const albums = this.props.albumList.map (
            (album) => {
                       return (<Card key={album.id} 
                                albumId={album.id}
                                albumTitle={album.title} 
                                albumDescription={album.description} 
                                buttonText="OK" 
                                imgURL={album.image}
                                onClick={this.handleSelectionOne}/>);
            });
            return (
                <div className="container">
                    {albums}
                </div>
            );
    }
}

export default AlbumList;
