import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { HTMLContent } from '../Content';
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const WhyUs = ({ data }) => {
  function renderConclusions(conclusiondivs) {
    if (conclusiondivs && conclusiondivs.length > 0) {
      return conclusiondivs.map((conclusiondiv) => {
        return (
          <div key={v4()} className="col-md-6 col-sm-6 col-12 reason-box">
            <div className="pb-5">
              <div className="d-block py-3 reason-name">{conclusiondiv.text}</div>
              <div className="d-block">
                <img src={conclusiondiv.img} alt={conclusiondiv.text} />
              </div>
              <div className="d-block reason-description">
                <HTMLContent content={toHTML(conclusiondiv.description)} />
              </div>
            </div>
          </div>
        );
      });
    }
    return null;
  }
  function renderList(listdivs) {
    if (listdivs && listdivs.length > 0) {
      return listdivs.map((listdiv) => {
        return (
          <div key={v4()} className="col-md-6 col-sm-6 col-12 reason-box">
            <div className="pb-5">
              <div className="d-block py-3 reason-name">{listdiv.text}</div>
              <div className="d-block reason-description">
                <HTMLContent content={toHTML(listdiv.description)} />
              </div>
            </div>
          </div>
        );
      });
    }
    return null;
  }
  function renderReasons(reasons) {
    if (reasons && reasons.length > 0) {
      return reasons.map((reason) => {
        return (
          <div key={v4()} className="col-md-4 col-sm-6 col-12 reason-box">
            <div className="pb-5">
              <div className="d-block reason-image">
                <img src={reason.img} alt={reason.text} />
              </div>
              <div className="d-block py-3 reason-name">{reason.text}</div>
              <div className="d-block reason-description">
                <HTMLContent content={toHTML(reason.description)} />
              </div>
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
        <div className="d-block w-100 py-4 px-lg-5 px-3 tab-background hybrid-cloud-container">
          <div className="d-block w-100 px-lg-5 px-2">
            <div className="row align-items-center justify-content-between">
              {data.fullimg &&(<>
                <div className="col-md-12 col-sm-12">
                  <div className="d-inline-block bg-white hybrid-cloud-image">
                    <img src={data.img} alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <HTMLContent className="d-block w-100 content" content={toHTML(data.description)} />
                </div>
              </>)}
              {!data.fullimg &&(<>
                <div className="col-md-6 col-sm-12">
                  <div className="d-inline-block bg-white hybrid-cloud-image">
                    <img src={data.img} alt="" />
                  </div>
                </div>
                 <div className="col-md-6 col-sm-12">
                  <HTMLContent className="d-block w-100 content" content={toHTML(data.description)} />
                </div>
              </>)}
              <div className="d-block w-100 py-5 px-lg-5 px-3">
          <div className="d-block w-100 px-lg-5 px-2">
            <div className="row">
              {renderList(data.listdivs)}
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
        <div className="d-block w-100 py-4 px-lg-5 px-3 tab-background solutioning-container">
          <div className="d-block w-100 px-lg-5 px-2">
            <HTMLContent content={toHTML(data.productdescription)} />
          </div>
        </div>
           <div className="d-block w-100 py-5 px-lg-5 px-3 text-center tab-dark-background">
          <div className="d-block w-100 px-lg-5 px-2">
            <h2 className="d-block pt-4 pb-5 reason-header">
              {data.reasonstext}
            </h2>
            <div className="row">
              {renderReasons(data.reasons)}
            </div>
          </div>
        </div>
        <div className="d-block w-100 py-5 px-lg-5 px-3 text-center tab-dark-background">
          <div className="d-block w-100 px-lg-5 px-2">
            <div className="row">
              {renderConclusions(data.conclusiondivs)}
            </div>
          </div>
        </div>
        <div className="d-block w-100 py-5 px-lg-5 px-3 tab-background finally-help-container">
          <div className="d-block w-100 py-4 px-lg-5 px-2">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-12">
                <div className="content">
                  <HTMLContent content={toHTML(data.conclusion)} />
                </div>
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
