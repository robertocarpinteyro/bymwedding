import React from 'react';
import TimeCountDown from '../TimeCountDown/TimeCountDown';
import './style.css'

const Saveday = () => {

    return (
        <div className="count-down-area">
            <div className="count-down-sectionparallax">
                <div className="container">
                    <div className="count-down-item count-down-item2">
                        <div className="row">
                          
                            <div className="col-12 col-md-8 clock-area">
                                <h2 class="save-the-date-title">SAVE THE DATE</h2>
                                <div className="count-down-clock">
                                    <TimeCountDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saveday;