import React from'react';
import PostList from './PostList';
// App just has a div that calls the PostList component
const App =() => {
    return (
    <div className='ui container'><PostList /></div>
    );
};

export default App;