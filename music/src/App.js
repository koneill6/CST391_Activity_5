import React from 'react';
import Card from './Card';
import './App.css';

class App extends React.Component {

    state = { albumList: [
        {
        "id":0,
        "title":"Goodbye Yellow Brick Road",
        "description":"Goodbye Yellow Brick Road is the seventh studio album by English singer-songwriter Elton John, first released on 5 October 1973 as a double LP",
        "year": 1973,
        "image":"//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg"
        },
        {
        "id":1,
        "title":"Goodbye Yellow Brick Road",
        "description":"Goodbye Yellow Brick Road is the seventh studio album by English singer-songwriter Elton John, first released on 5 October 1973 as a double LP",
        "year": 1973,
        "image":"//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg"
        },
        {
        "id":2,
        "title":"Goodbye Yellow Brick Road",
        "description":"Goodbye Yellow Brick Road is the seventh studio album by English singer-songwriter Elton John, first released on 5 October 1973 as a double LP",
        "year": 1973,
        "image":"//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg"
        },
    ]};

    renderedList = () => {
        return this.state.albumList.map(
            (album) => {
                return(
                    <Card 
                    imageurl={album.image} 
                    albumtitle={album.title}
                    albumdescription={album.description}
                    buttontext="OK"
                    />
                )
            }
        )
    }

    render() {
        return (
            <div className='container'>
                {this.renderedList()}
            </div>
        )
    }
}

export default App;