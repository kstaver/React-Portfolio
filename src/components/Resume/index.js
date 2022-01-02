import React from 'react';

function Resume(){
    return(
        <section className="container">
            <h2 className="top-title">Resume</h2>
            <hr></hr>
            <div>
                <div className="mt-5">
                    <h2 className="top-title">Kendra Staver</h2>
                    <ul>
                        <li>
                            Full-Stack Web Developer, Mathematician
                        </li>
                    </ul>

                    <p className="mt-5">
                        <a href="https://www.linkedin.com/in/kendra-staver/">
                            <img
                                src=""
                                alt="linkedIn"
                            />
                        </a>
                        <a
                            href=""
                            className="link"
                        >
                            Download Resume
                        </a>
                    </p>
                </div>            
            </div>
        </section>
    );
}

export default Resume;