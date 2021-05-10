import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { HTMLContent } from '../Content';
const toHTML = (value) =>
    remark().use(remarkHTML).processSync(value).toString();

const OurAproach = ({ data }) => {
    return (
        data ?
            <div className="aproach-container">
                {
                    data.description && data.img &&
                    <div className="d-block w-100 py-4 px-lg-5 px-3 header-container tab-background">
                        <div className="d-block w-100 pb-5 px-lg-5 px-2">
                            <p className="text-center mb-5">
                                <img src={data.img} />
                            </p>
                            <p>
                                <HTMLContent content={toHTML(data.description)} />
                            </p>
                        </div>
                    </div>
                }
                <div className="d-block w-100 py-5 px-lg-5 px-3 actions-container tab-background-dark">
                    {
                        data.actions && data.actions.map((item, index) => {
                            return (
                                <div key={v4()} className="d-block w-100 py-5 px-lg-5 px-2">
                                    <div className="row align-items-center justify-content-center">
                                        <div className={index % 2 ? 'col-md-5 col-12 order-md-last' : 'col-md-6 col-12 order-md-first'}>
                                            <div className="d-block mb-4 banner-image">
                                                <img src={item.img} />
                                            </div>
                                        </div>
                                        <div className={index % 2 ? 'col-md-6 col-12' : 'col-md-5 col-12'}>
                                            <div className="d-block content">
                                                <span className="d-block">{item.heading}</span>
                                                <HTMLContent content={toHTML(item.text)} />
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

export default OurAproach