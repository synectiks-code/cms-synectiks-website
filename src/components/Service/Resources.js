import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Resources = ({ }) => {
  return (
    <div className="resources-container">
        <div className="image"> 
            <img src="https://res.cloudinary.com/papu/image/upload/v1619548116/hybrid-cloud/resource_zvi9tl.png" alt="" /> 
        </div>
        <div className="image">
            <img src="https://res.cloudinary.com/papu/image/upload/v1619548121/hybrid-cloud/mostly_lifvgh.png" alt="" /> 
        </div>
    </div>
  );
};

Resources.propTypes = {
    resources: PropTypes.arrayOf(
        PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string,
        subItems: PropTypes.arrayOf(
            PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string,
            useCaseSlider: PropTypes.arrayOf(
                PropTypes.shape({
                img: PropTypes.string,
                name: PropTypes.string,
                text: PropTypes.string,
                })
            )
            })
        )
        })
    ),
}

export default Resources