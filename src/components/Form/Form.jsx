import React from 'react';

import './Form.scss';

const Form = () => {
    return (
        <div className="form section">
            <div className="container">
                <div className="section__header">
                    <div className="section__header-title">
                        <h2>Register to get a work</h2>
                    </div>
                    <div className="section__header-subtitle">
                        <h5>
                            Attention! After successful registration and alert, 
                            update the list of users in the block from the top
                        </h5>
                    </div>
                </div>

                <div className="form__content">
                    <form action="post">
                        <div className="form__item">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your name" />
                        </div>

                        <div className="form__item">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Your Email" />
                        </div>

                        <div className="form__item">
                            <label htmlFor="phone">Phone number</label>
                            <input type="text" id="phone" placeholder="+380 XX XXX XX XX" />
                            <span>Еnter phone number in open format</span>
                        </div>

                        <div className="form__item-radio">
                            <div className="item__radio">
                                <input type="radio" name="position" value="Frontend developer" id="frontend" />
                                <label for="frontend">Frontend developer</label>
                            </div>

                            <div className="item__radio">
                                <input type="radio" name="position" value="Backend developer" id="backend" />
                                <label for="backend">Backend developer</label>
                            </div>
                            
                            <div className="item__radio">
                                <input type="radio" name="position" value="Designer" id="designer" />
                                <label for="designer">Designer</label>
                            </div>

                            <div className="item__radio">
                                <input type="radio" name="position" value="QA" id="qa" />
                                <label for="qa">QA</label>
                            </div>
                        </div>

                        <div className="form__item-file">
                            <label className="file">
                                <input type="file" id="file" aria-label="File browser example"/>
                                <span class="file-custom"></span>
                            </label>
                        </div>

                        <div className="submit-button">
                            <button>Sing up now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;