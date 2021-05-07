import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel';

const Resources = ({ data }) => {

    return (
        <div className="d-block w-100 tab-background resources-container">
            <div className="d-block mx-md-5 mx-3 pb-md-5 partners-slider">
                <div className="d-block w-100 px-lg-5 px-2">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-3 col-12">
                            <div className="d-block mb-3 success-heading">Success Stories</div>
                            <div className="d-block mb-3 success-link">
                                <a href="#">View All Success Stories &#62;</a>
                            </div>
                            <div className="d-block mb-3 indicators">
                                <span>01</span>
                                <span className="line">
                                    <span style={{ width: '20%' }}></span>
                                </span>
                                <span>06</span>
                            </div>
                            <div className="d-block text-center mb-5 mb-lg-0 success-button">
                                <button className="control-prev disabled" type="button">
                                    <i className="fa fa-arrow-circle-right"></i>
                                </button>
                                <button className="control-next" type="button">
                                    <i className="fa fa-arrow-circle-left"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-12">
                            <Carousel scrollMode="remainder" withoutControls={true}>
                                <div>
                                    <div className="card">
                                        <img src="https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_SoftwareDefinedTransformation-03250f0e4ba38735d6e41abaa9d0fb54_s6lngd.jpg" alt="" />
                                        <div className="d-block px-3 py-4 caption">
                                            <div className="heading">
                                                <h5>Software Defined Transformation</h5>
                                            </div>
                                            <div className="description">
                                                <p>AWS Cloud migration for a large motor industry.</p>
                                            </div>
                                            <a target="_blank" href="#" className="btn">
                                                Read More <i className="fa fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src="https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_SoftwareDefinedTransformation-03250f0e4ba38735d6e41abaa9d0fb54_s6lngd.jpg" alt="" />
                                        <div className="d-block px-3 py-4 caption">
                                            <div className="heading">
                                                <h5>Realtime Monitoring</h5>
                                            </div>
                                            <div className="description">
                                                <p>Highly Scalable extremely customizable realtime monitoring platform.</p>
                                            </div>
                                            <a target="_blank" href="#" className="btn">
                                                Read More <i className="fa fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src="https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_SoftwareDefinedTransformation-03250f0e4ba38735d6e41abaa9d0fb54_s6lngd.jpg" alt="" />
                                        <div className="d-block px-3 py-4 caption">
                                            <div className="heading">
                                                <h5>Storage Migration</h5>
                                            </div>
                                            <div className="description">
                                                <p>Petabytes of storage migration for a large financial company with zero down time.</p>
                                            </div>
                                            <a target="_blank" href="#" className="btn">
                                                Read More <i className="fa fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src="https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_SoftwareDefinedTransformation-03250f0e4ba38735d6e41abaa9d0fb54_s6lngd.jpg" alt="" />
                                        <div className="d-block px-3 py-4 caption">
                                            <div className="heading">
                                                <h5>Network Design</h5>
                                            </div>
                                            <div className="description">
                                                <p>Complete network Backbone design with highest security for retail.</p>
                                            </div>
                                            <a target="_blank" href="#" className="btn">
                                                Read More <i className="fa fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src="https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_SoftwareDefinedTransformation-03250f0e4ba38735d6e41abaa9d0fb54_s6lngd.jpg" alt="" />
                                        <div className="d-block px-3 py-4 caption">
                                            <div className="heading">
                                                <h5>Storage Tier</h5>
                                            </div>
                                            <div className="description">
                                                <p>Moving Bigdata workloads to aggregated platform for a large telco.</p>
                                            </div>
                                            <a target="_blank" href="#" className="btn">
                                                Read More <i className="fa fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card">
                                        <img src="https://res.cloudinary.com/papu/image/upload/v1620305230/new-design/home-page/Images/CS_SoftwareDefinedTransformation-03250f0e4ba38735d6e41abaa9d0fb54_s6lngd.jpg" alt="" />
                                        <div className="d-block px-3 py-4 caption">
                                            <div className="heading">
                                                <h5>Disaster Recovery</h5>
                                            </div>
                                            <div className="description">
                                                <p>Lightweight disaster recovery platform for indian Defense.</p>
                                            </div>
                                            <a target="_blank" href="#" className="btn">
                                                Read More <i className="fa fa-long-arrow-alt-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Resources.propTypes = {
    resources: PropTypes.object
}

export default Resources