import React from 'react';
import Card from './Card';

const App = () => {
    return (
        <div>
            <h1>Music I like</h1>
            <Card 
                imageurl="//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg" 
                albumtitle="Goodbye Yellow Brick Road" 
                albumdescription="Goodbye Yellow Brick Road is the seventh studio album by English singer-songwriter Elton John, first released on 5 October 1973 as a double LP"
                buttontext="OK"
            />
            <Card />
            <Card />
        </div>
    )
}

export default App;