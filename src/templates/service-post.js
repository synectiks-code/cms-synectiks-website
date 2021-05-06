import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../css/service.css';
import ScrollTop from '../components/ScrollTop';
import ScrollBottom from '../components/ScrollBottom';
import WhyUs from '../components/Service/WhyUs';
import OurAproach from '../components/Service/OurAproach';
import GettingStarted from '../components/Service/GettingStarted';
import Resources from '../components/Service/Resources';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { HTMLContent } from '../components/Content';
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();


export const ServicePostTemplate = ({ bannerdescription, bannericon, bannericonname, bannerimage, helmet, whyus, aproach, gettingstarted }) => {
  const pages = ["Why Us", "Our Approach", "Getting Started", "Resources"];
  const [currentSlide, setCurrentSlide] = useState(0);
  function updateCurrentSlide(factor){
    if(currentSlide + factor >= 0 && currentSlide + factor <= 3){
      setCurrentSlide(currentSlide + factor);
    }
  }
  return (
    <React.Fragment>
      {helmet || ''}
      <div className="service-contaienr">
        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between pb-5 banner-container">
          <div className="d-inline-block banner-left">
            <div className="d-block banner-img"><img src={bannerimage} alt="" /></div>
            <div className="d-inline-block text-center mx-lg-5 mx-2 mb-lg-0 mb-3 p-4 banner-text">
              <HTMLContent content={toHTML(bannerdescription)} />
            </div>
          </div>
          <div className="d-inline-block text-center banner-right">
            <div className="d-block banner-icon-img"><img src={bannericon} alt="" /></div>
            <div className="d-block banner-heading">{bannericonname}</div>
          </div>
        </div>
        <div className="d-block tab-container">
          <div className="d-block py-4 px-lg-5 px-3 tabs">
            <ul className="nav nav-tabs w-100 justify-content-between">
              {pages.map((pageContent, index) => (
                <li className="nav-item">
                  <button onClick={() => setCurrentSlide(index)} className={`${currentSlide === index ? 'active' : ''} nav-link`} >{pageContent}<i className="fa fa-arrow-down"></i></button>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content position-relative">
            {
              currentSlide !== 0 &&
              <button onClick={()=>updateCurrentSlide(-1)} class="btn tabs-arrow-left">
                <i class="fa fa-long-arrow-alt-left"></i>
              </button>
            }
            {
              currentSlide !== 3 &&
              <button onClick={()=>updateCurrentSlide(1)} class="btn tabs-arrow-right">
                <i class="fa fa-long-arrow-alt-right"></i>
              </button>
            }
            <div className={`tab-pane fade ${currentSlide === 0 ? 'active show' : ''}`}>
              <WhyUs data={whyus} />
            </div>
            <div className={`tab-pane fade ${currentSlide === 1 ? 'active show' : ''}`}>
              <OurAproach data={aproach} />
            </div>
            <div className={`tab-pane fade ${currentSlide === 2 ? 'active show' : ''}`}>
              <GettingStarted data={gettingstarted} />
            </div>
            <div className={`tab-pane fade ${currentSlide === 3 ? 'active show' : ''}`}>
              <Resources />
            </div>
          </div>
        </div>
      </div>
      <ScrollTop showAbove={50} />
      <ScrollBottom showBelow={50} />
    </React.Fragment>
  );
};

ServicePostTemplate.propTypes = {
  bannerdescription: PropTypes.string,
  bannerimage: PropTypes.string,
  bannericon: PropTypes.string,
  bannericonname: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  whyus: PropTypes.object,
  aproach: PropTypes.object,
  gettingstarted: PropTypes.object,
};

const ServicePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ServicePostTemplate
        bannerdescription={post.frontmatter.bannerdescription}
        bannerimage={post.frontmatter.bannerimage}
        bannericon={post.frontmatter.bannericon}
        bannericonname={post.frontmatter.bannericonname}
        helmet={
          <Helmet titleTemplate='%s | Service'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.bannerdescription}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        whyus={post.frontmatter.whyus}
        aproach={post.frontmatter.aproach}
        gettingstarted={post.frontmatter.gettingstarted}
      />
    </Layout>
  );
};

ServicePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ServicePost;

export const pageQuery = graphql`
  query ServicePostByID($id: String!) {
          markdownRemark(id: {eq: $id }) {
          id
      html
      frontmatter {
          date(formatString: "MMMM DD, YYYY")
        title
        bannerimage
        bannerdescription
        bannericon
        bannericonname
        whyus {
          img
          description
          productdescription
          reasonstext
          reasons {
            img
            text
            description
          }
          conclusion
          conclusionimg
        }
        aproach {
          img,
          description,
          actions {
            img,
            heading,
            text
          }
        }
        gettingstarted {
          actiontext,
          description,
          actions {
            img
            text
            description
          }
        }
      }
    }
  }
`;
