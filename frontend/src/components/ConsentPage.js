import React from 'react';
import './ConsentPage.css';

const ConsentPage = (props) => (
        <section className="consent-page-wrapper">
            <header className="consent-page-header">
                <h1>Participant Information and Consent Form</h1>
            </header>
            <div className="consent-page-agreement">
                <p>
                    By clicking agree below... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                
            </div>
            <div className="consent-page-agreement-btns">
                <button>I AGREE</button>
                <button>NO, TAKE ME AWAY</button>
            </div>
        </section>
    );

export default ConsentPage;