import React from 'react';
import Counter from './Counter';

const App = () => {
    return(
        <div>
            <h1>Clicker App</h1>
            <Counter title="First message"/>
            <Counter title="Another Counter component here"/>
            <Counter title="This one is third"/>
            <Counter title="Last Clicker"/>
        </div>
        
    )
}

export default App;