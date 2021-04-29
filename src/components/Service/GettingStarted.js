import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const GettingStarted = ({ data }) => {
    return (
        <div className="getting-container">
            <div className="getting-heading-content">
                <h5>{data.actiontext}</h5>
                <p>{data.description}</p>
            </div>
            <div className="getting-service-container">
                {data.actions.map((action) => {
                    return (
                        <div key={v4()} className="service">
                            <div className="row flex-column align-items-center">
                                <div className="col-md-2">
                                    <div className="image">
                                        <img src={action.img} />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <h5>{action.text}</h5>
                                    <p>{action.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

GettingStarted.propTypes = {
    gettingstarted: PropTypes.object
}

export default GettingStarted