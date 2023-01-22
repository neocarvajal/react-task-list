/* eslint-disable */

import React from 'react';
import { useHistory } from 'react-router';

const AboutPage = () => {
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
           
            <section>
                <h1 style={{color:"white"}}>About Page</h1>
            </section>
        </div>
    );
}

export default AboutPage;
