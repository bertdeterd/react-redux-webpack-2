import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
            <h1>Puralsight</h1>
            <p>about page</p>
            <Link to="about" classname="btn">Linkje</Link>
            </div>

        );
    }
}

export default AboutPage;