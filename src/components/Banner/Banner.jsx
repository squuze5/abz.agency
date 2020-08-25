import React from 'react';

import './Banner.scss';

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__content">
                    <h2>Test assignment for Frontend Developer position</h2>

                    <p>
                        We kindly remind you that your test assignment should be 
                        submitted as a link to github/bitbucket repository. Please 
                        be patient, we consider and respond to every application 
                        that meets minimum requirements. We look forward to your 
                        submission. Good luck! The photo has to scale in the banner 
                        area on the different screens
                    </p>

                    <div className="submit-button">
                        <button>Sing up now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;