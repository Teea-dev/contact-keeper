import React from 'react';
import Nav from '../layout/Nav';

function About() {
    return (
        <>
    <Nav />
        <div className="container">
            <h1>About</h1>
            <p className="my-1">
                This is a full stack React app for keeping contacts
            </p>
            <p className="bg-dark p">
                <strong>Version: </strong> 1.0.0
            </p>
        </div>
        </>

      );
}

export default About ;