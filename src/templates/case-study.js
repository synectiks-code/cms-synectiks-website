import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import remark from 'remark';
import remarkHTML from 'remark-html';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();
export const CasePostTemplate = ({
  backimage,
  featuredimage,
  bannerdescription,
  bannerimage,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section
      className='section'
      style={{ backgroundColor: '#fff', color: '#000' }}>
      {helmet || ''}
      <div
        style={{
          backgroundImage: `url(${
            featuredimage ? (
              <div className='featured-thumbnail'>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`,
                  }}
                />
              </div>
            ) : null
          })`,
        }}></div>
      <div className='d-flex align-items-center p-5'>
        <div className='w-50 banner-text'>
          <HTMLContent content={toHTML(bannerdescription)} />
        </div>
        <div className='w-50 banner-img'>
          <img src={bannerimage} alt='' />
          {/* <img src={backimage} alt='' /> */}
        </div>
      </div>

      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className='taglist'>
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

CasePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const CasePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CasePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        // backimage={post.frontmatter.backimage}
        bannerdescription={post.frontmatter.bannerdescription}
        bannerimage={post.frontmatter.bannerimage}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Case'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

CasePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CasePost;

export const pageQuery = graphql`
  query CasePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        # backimage
        bannerdescription
        bannerimage
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
