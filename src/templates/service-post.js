import React, { useState } from 'react';
import {} from 'react-router-dom';
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
import remark from 'remark';
import remarkHTML from 'remark-html';

const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

export const ServicePostTemplate = ({ contentComponent, page, helmet }) => {
  const PostContent = contentComponent || Content;
  // const [ currentSlide, setCurrentSlide ] = useState(0);
  let slideIndex = typeof window !== 'undefined' ? window.location.hash : '';
  slideIndex = parseInt(slideIndex.replace('#', ''));
  if (isNaN(slideIndex)) {
    slideIndex = 0;
  }
  if (typeof window !== 'undefined') {
    window.onhashchange = () => {
      console.log('ha ha');
      let slideIndex =
        typeof window !== 'undefined' ? window.location.hash : '';
      slideIndex = parseInt(slideIndex.replace('#', ''));
      if (isNaN(slideIndex)) {
        slideIndex = 0;
      }
      setCurrentSlide(slideIndex);
    };
  }
  const [currentSlide, setCurrentSlide] = useState(slideIndex);
  return (
    <React.Fragment>
      <section className='section' id='top'>
        {helmet || ''}
        <div className='container content p-0'>
          <div className='columns'>
            <div className='column is-12'>
              <div className='btn-stack'>
                {page.map((pageContent, index) => (
                  <button
                    key={v4()}
                    className={`${
                      currentSlide === index ? 'mybtnactive' : 'mybtn'
                    }`}
                    onClick={() => setCurrentSlide(index)}>
                    <span className='btn-arr-down'>
                      <BsArrowDown />
                    </span>
                    {pageContent.heading}
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
                  {page.map((pageContent) => (
                    <div key={v4()}>
                      {/* <div className='page-heading'> */}
                      {/* <div className=''>
                        <h3 className='has-text-centered has-text-weight-semibold is-size-2'>
                          {pageContent.heading}
                        </h3>
                      </div> */}
                      <PostContent
                        className='page-content'
                        content={toHTML(pageContent.description)}
                      />
                    </div>
                  ))}
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
  page: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

const ServicePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ServicePostTemplate
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        page={post.frontmatter.page}
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
        page {
          description
          heading
        }
      }
    }
  }
`;
