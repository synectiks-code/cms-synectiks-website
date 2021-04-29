import React, { useState } from 'react';
import { } from 'react-router-dom';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Carousel from 'nuka-carousel';
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineArrowDown,
} from 'react-icons/ai';
import { BsArrowDown } from 'react-icons/bs';
import { v4 } from 'uuid';
import './service.css';
import ScrollTop from '../components/ScrollTop';
import ScrollBottom from '../components/ScrollBottom';
import WhyUs from '../components/Service/WhyUs';
import OurAproach from '../components/Service/OurAproach';
import GettingStarted from '../components/Service/GettingStarted';
import Resources from '../components/Service/Resources';



export const ServicePostTemplate = ({ contentComponent, helmet, whyus, aproach, gettingstarted }) => {
  let slideIndex = typeof window !== 'undefined' ? window.location.hash : '';
  slideIndex = parseInt(slideIndex.replace('#', ''));
  if (isNaN(slideIndex)) {
    slideIndex = 0;
  }
  const pages = ["Why Us", "Our Approach", "Getting Started", "Resources"];
  const [currentSlide, setCurrentSlide] = useState(slideIndex);
  return (
    <React.Fragment>
      <section className='section' id='top'>
        {helmet || ''}
        <div className='container content p-0'>
          <div className='columns'>
            <div className='column is-12'>
              <div className='btn-stack'>
                {pages.map((pageContent, index) => (
                  <button
                    key={v4()}
                    className={`${currentSlide === index ? 'mybtnactive' : 'mybtn'
                      }`}
                    onClick={() => setCurrentSlide(index)}>
                    <span className='btn-arr-down'>
                      <BsArrowDown />
                    </span>
                    {pageContent}
                  </button>
                ))}
              </div>
              <div>
                <Carousel
                  afterSlide={(slideIndex) => setCurrentSlide(slideIndex)}
                  slideIndex={currentSlide}
                  rendertopCenterControls={true}
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide} className='nabtn-left'>
                      <AiOutlineLeft />
                    </button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} className='nabtn-right'>
                      <AiOutlineRight />
                    </button>
                  )}>
                  <div>
                    <WhyUs data={whyus} />
                  </div>
                  <div>
                    <OurAproach data={aproach} />
                  </div>
                  <div>
                    <GettingStarted data={gettingstarted} />
                  </div>
                  <div>
                    <Resources />
                  </div>
                </Carousel>
                <ScrollBottom showBelow={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop showAbove={50} />
    </React.Fragment>
  );
};

ServicePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  whyus: PropTypes.object,
  aproach: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      description: PropTypes.string
    })
  ),
  gettingstarted: PropTypes.object,
};

const ServicePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ServicePostTemplate
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Service'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
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
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        whyus {
          img
          description
          reasonstext
          reasons {
            img
            text
            description
          }
          conclusion
        }
        aproach {
          img,
          description
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
