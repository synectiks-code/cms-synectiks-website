import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const OurAproach = ({ data }) => {
    return (
        data ?
            <div className="aproach-container">
                <div className="d-block w-100 py-4 px-lg-5 px-3 header-container tab-background">
                    <div class="d-block w-100 pb-5 px-lg-5 px-2">
                        <p class="text-center mb-5">
                            <img src={data.img} />
                        </p>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div class="d-block w-100 py-5 px-lg-5 px-3 actions-container tab-background-dark">
                    {
                        data.actions.map((item) => {
                            return (
                                <div key={v4()} class="d-block w-100 pb-5 px-lg-5 px-2">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-md-7 col-12">
                                            <div className="d-block image">
                                                <img src={item.img} />
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-12">
                                            <div class="d-block content">
                                                <span class="d-block">{item.heading}</span>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> :
            <div>no data</div>
    );
};

OurAproach.propTypes = {
    data: PropTypes.array
}

export default OurAproach