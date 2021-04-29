import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import remark from 'remark';
import remarkHTML from 'remark-html';
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const WhyUs = ({ data }) => {
  function renderReasons(reasons) {
    if (reasons && reasons.length > 0) {
      return reasons.map((reason) => {
        return (
          <div key={v4()} className="col-sm-4 col-md-4">
            <div class="text-center service-box">
              <div className="image">
                <img src={reason.img} alt="Experience" />
              </div>
              <h5>{reason.text}</h5>
              <p>{reason.description}</p>
            </div>
          </div>
        );
      });
    }
    return null;
  }
  return (
    <div className="whyus-container">
      <div className="text-center whyus-banner-content">
        <img src={data.img} alt="" />
        <p>{data.description}</p>
      </div>
      <div className="whyus-service-container">
        <h2>{data.reasonstext}</h2>
        <div className="row">
          {renderReasons(data.reasons)}
        </div>
      </div>
      <div className="whyus-bottom-text">
        <p>{data.conclusion}</p>
      </div>
    </div>
  );
};

WhyUs.propTypes = {
  data: PropTypes.object
}

export default WhyUs