import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { HTMLContent } from '../Content';
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const WhyUs = ({ data }) => {
  function renderReasons(reasons) {
    if (reasons && reasons.length > 0) {
      return reasons.map((reason) => {
        return (
          <div key={v4()} className="col-md-4 col-12 reason-box">
            <div className="pb-5">
              <div className="image">
                <img src={reason.img} />
              </div>
              <div className="d-block py-3 name">{reason.text}</div>
              <p className="d-block description">
                <HTMLContent content={toHTML(reason.description)} />
              </p>
            </div>
          </div>
        );
      });
    }
    return null;
  }
  return (
    data ?
      <>
        <div className="d-block w-100 py-4 px-lg-5 px-3 tab-background">
          <div className="d-block w-100 px-lg-5 px-2">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-sm-12">
                <div className="d-inline-block bg-white hybrid-cloud-image">
                  <img src={data.img} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <HTMLContent content={toHTML(data.description)} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-block w-100 py-4 px-lg-5 px-3 tab-background">
          <div className="d-block w-100 px-lg-5 px-2">
            <HTMLContent content={toHTML(data.productdescription)} />
          </div>
        </div>
        <div className="d-block w-100 py-5 px-lg-5 px-3 text-center tab-dark-background">
          <div className="d-block w-100 px-lg-5 px-2">
            <h2 className="d-block pt-4 pb-5 reason-header">]
              <HTMLContent content={toHTML(data.reasonstext)} />
            </h2>
            <div className="row">
              {renderReasons(data.reasons)}
            </div>
          </div>
        </div>
        <div className="d-block w-100 py-5 px-lg-5 px-3 tab-background">
          <div className="d-block w-100 py-4 px-lg-5 px-2">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-12">
                <HTMLContent content={toHTML(data.conclusion)} />
              </div>
              <div className="col-md-6 col-12">
                <div className="d-block w-100 image">
                  <img src={data.conclusionimg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </> :
      <div>No data</div>
  );
};

WhyUs.propTypes = {
  data: PropTypes.object
}

export default WhyUs