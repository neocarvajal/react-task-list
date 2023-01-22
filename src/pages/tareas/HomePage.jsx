/* eslint-disable */

import React from 'react';
import { useHistory } from 'react-router';

const Homepage = () => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
            <section>
                <h1 style={{color:"white"}}>Home Page</h1>
            </section>
        </div>
    );
}

export default Homepage;
