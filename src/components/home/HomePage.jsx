import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
            <h1>Puralsight</h1>
            <p>home page</p>
            <Link to="about" classname="btn">Linkje naar about </Link>
            </div>

        );
    }
}

export default HomePage;