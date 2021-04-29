import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const OurAproach = ({ data }) => {
    return (
        data ? 
        <div className="aproach-container">
            <div className="aproach-service-container">
                {
                    data.map((item) => {
                        return (
                            <div key={v4()} className="service">
                                <div className="row flex-column align-items-center">
                                    <div className="col-md-6">
                                        <div className="image">
                                            <img src={item.img} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className="aproach-bottom-text">
                <p> The SYNECTIKS Cloud security service is designed to secure identified Customer workloads in the aws cloud. Synectiks will work in conjunction with Customer to validate a security plan for the identified workloads, provision the aws environment, and assist with the security verification of the aws environment </p>
            </div> */}
        </div> : 
        <div>no data</div>
    );
};

OurAproach.propTypes = {
    data: PropTypes.array
}

export default OurAproach