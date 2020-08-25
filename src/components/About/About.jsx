import React from 'react';

import './About.scss';
import AboutImg from '../../assets/img/man-laptop-v1.svg';

const About = () => {
    return (
        <section className="about section">
            <div className="container">
                <div className="section__header">
                    <div className="section__header-title">
                        <h2>Let's get acquainted</h2>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__content-img">
                        <img src={AboutImg} alt="About man"/>
                    </div>

                    <div className="about__content-text">
                        <h4>I am cool frontend developer</h4>
                        <p>
                            We will evaluate how clean your approach to writing CSS and 
                            Javascript code is. You can use any CSS and Javascript 3rd 
                            party libraries without any restriction.
                        </p>
                        <p>
                            If 3rd party css/javascript libraries are added to the project 
                            via bower/npm/yarn you will get bonus points. If you use any 
                            task runner (gulp/webpack) you will get bonus points as well. 
                            Slice service directory page P​SD mockup​ into HTML5/CSS3.
                        </p>

                        <a>Sing up now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;