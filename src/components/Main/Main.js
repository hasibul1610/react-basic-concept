import React from 'react';
import Card from '../Card/Card';
import RightCard from '../RightCard/RightCard';
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className="main">
                <div className="left">
                <h3>JS Confusing Part</h3>
                <p>Understand this, <span className="main-highlight">scope</span>, <span className="main-highlight">hoisting</span>, <span className="main-highlight">closure</span>, <span className="main-highlight">inheritance</span>, <span className="main-highlight">bind</span>, <span className="main-highlight">call</span>, <span className="main-highlight">apply</span>, <span className="main-highlight">prototype</span>, <span className="main-highlight">event delegation</span>, <span className="main-highlight">dom</span>, <span className="main-highlight">timers</span> and many more caveats.</p>
                <Card></Card>

                </div>
                <div className="right">
                    <RightCard></RightCard>

                </div>
                
                
            </div>
        </div>
    );
};

export default Main;