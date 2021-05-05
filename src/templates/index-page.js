import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { v4 } from 'uuid';
import Layout from '../components/Layout'
import '../css/home.css';

export const IndexPageTemplate = ({
  bannercontent,
  usecases
}) => (
  <div className="home-container">
    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between px-5 py-4 dark-background banner-container">
      <div class="d-inline-block banner-left">
        <div class="d-block py-5 banner-content">
          <h2>{bannercontent.title}</h2>
          <p>{bannercontent.text}</p>
          <div class="d-flex banner-btns">
            <a href="#" class="btn for-free">Try Synectiks For Free</a>
            <a href="#" class="btn watch-demo">Watch Demo</a>
          </div>
        </div>
      </div>
      <div class="d-inline-block text-center banner-right">
        <div class="d-block pt-4 banner-services">
          <div class="row">
            {bannercontent.service.map((service) => (
              <div key={v4()} class="col-md-6 col-12">
                <div class="d-block w-100 text-center service">
                  <div class="d-inline-block rounded-circle image">
                    <div class="d-flex align-items-center justify-content-center w-100 h-100">
                      <img src={service.img} alt={service.name} />
                    </div>
                  </div>
                  <div class="d-inline-block text">
                    {service.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="d-block py-5 background platform-container">
      <h2 className="d-block text-center pb-5">{usecases.heading}</h2>
      <div className="d-block px-5 pb-5 mb-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 col-12">
            <div className="d-block px-lg-5 text-center platform-content">
              <div className="d-block mb-4 image-box">
                <div className="image"><img src={usecases.cioimage} alt="" /></div>
              </div>
              <div className="d-block platform-button">
                <button className="btn">For CIO / CTO</button>
                <i className="fa fa-angle-double-right"></i>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-12">
            <div className="d-block platform-services">
              <div className="row">
                {usecases.cioservice.map((cioservice) => (
                  <div key={v4()} className="col-md-6 col-12">
                    <div className="d-block text-center service">
                      <div className="d-inline-block rounded-circle image">
                        <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                          <img src={cioservice.img} alt="" />
                        </div>
                      </div>
                      <div className="d-block name">{cioservice.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block px-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 col-12">
            <div className="d-block platform-services">
              <div className="row">
                {usecases.teamservice.map((teamservice) => (
                  <div key={v4()} className="col-md-6 col-12">
                    <div className="d-block text-center service">
                      <div className="d-inline-block rounded-circle image">
                        <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                          <img src={teamservice.img} alt="" />
                        </div>
                      </div>
                      <div className="d-block name">{teamservice.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="d-block px-lg-5 text-center platform-content">
              <div className="d-block mb-4 image-box">
                <div className="image"><img src={usecases.cioimage} alt="" /></div>
              </div>
              <div className="d-block platform-button">
                <i className="fa fa-angle-double-left"></i>
                <button className="btn">For DevSecOps TEAM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-block py-5 dark-background solutions-container">
      <h2 className="d-block text-center py-5">Solutions</h2>
      <div className="d-block px-lg-5">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="d-block bg-white p-4 rounded solution-box">
              <div className="d-block text-center icon-img"><img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" /></div>
              <div className="d-block text-center name">AGGREGATE</div>
              <div className="d-block text-center sub-heading">Hardware Agnostic Infrastructure</div>
              <div className="d-block solutions-service">
                <ul>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Software Defined Infrastructure</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Multicloud Hybrid Provisioning Templates</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Resource Pooling Across Clouds</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Container / Serverless Ecosystem</spna>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="d-block bg-white p-4 rounded solution-box">
              <div className="d-block text-center icon-img"><img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" /></div>
              <div className="d-block text-center name">EXTEND</div>
              <div className="d-block text-center sub-heading">Blueprint Based Development</div>
              <div className="d-block solutions-service">
                <ul>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Reusable Application Blocks</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Prebuilt ISV Solutions</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Prebuilt CI /CD Blueprints</spna>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="d-block bg-white p-4 rounded solution-box">
              <div className="d-block text-center icon-img"><img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" /></div>
              <div className="d-block text-center name">AUTOMATE</div>
              <div className="d-block text-center sub-heading">Operation Automations</div>
              <div className="d-block solutions-service">
                <ul>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Realtime Monitoring</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Infrastructure Validation</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Audit and Compliance</spna>
                  </li>
                  <li>
                    <i className="fa fa-check"></i>
                    <spna>Cost Optimization</spna>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="d-block text-center py-5">Xformation primary goals</h2>
      <div className="d-block px-lg-5 primary-goals">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 col-12">
            <div className="d-block content">
              <h3>
                Xformation is a platform that provides peace of mind, governance, efficiency and control of multi-cloud environments.
              </h3>
              <p>
                Xformation helps you to migrate and modernize your legacy business, take advantage of cloud and microservice architecture and thereby accelerate your transformation journey @50% time & cost.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="d-block primary-goals-services">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 col-12">
                  <div className="d-block text-center service">
                    <div className="d-inline-block rounded-circle image">
                      <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                        <img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" />
                      </div>
                    </div>
                    <div className="d-block name">Accelerated Cloud Adoption</div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-block text-center service">
                    <div className="d-inline-block rounded-circle image">
                      <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                        <img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" />
                      </div>
                    </div>
                    <div className="d-block name">Multi-Cloud Container Orchestration</div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-block text-center service">
                    <div className="d-inline-block rounded-circle image">
                      <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                        <img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" />
                      </div>
                    </div>
                    <div className="d-block name">App-Centric Optimization</div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-block text-center service">
                    <div className="d-inline-block rounded-circle image">
                      <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                        <img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" />
                      </div>
                    </div>
                    <div className="d-block name">Continuous Delivery Complaince Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-block py-5 background partners-container">
      <h2 className="d-block text-center pb-5 pt-4">Our Partners</h2>
      <div className="d-block rounded mx-lg-5 mb-md-5 text-center partners">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 col-12">
            <a href="#"><img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" /></a>
          </div>
          <div className="col-md-3 col-12">
            <a href="#"><img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" /></a>
          </div>
          <div className="col-md-3 col-12">
            <a href="#"><img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" /></a>
          </div>
          <div className="col-md-3 col-12">
            <a href="#"><img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" /></a>
          </div>
        </div>
      </div>
      <div className="d-block mx-lg-5 py-lg-5 partners-slider">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3">
            <div className="d-block mb-3 success-heading">Success Stories</div>
            <div className="d-block mb-3 success-link">
              <a href="#">View All Success Stories &#62;</a>
            </div>
            <div className="d-block mb-3 indicators">
              <span>01</span>
              <span>06</span>
            </div>
            <div className="d-block text-center success-button">
              <button className="control-prev" type="button">
                <i className="fa fa-arrow-circle-right"></i>
              </button>
              <button className="control-next" type="button">
                <i className="fa fa-arrow-circle-left"></i>
              </button>
            </div>
          </div>
          <div className="col-md-9 col-9">
            <div className="item">
              <div className="row">
                <div className="col-6">
                  <div className="card">
                    <img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" />
                    <div className="d-block px-3 py-4 caption">
                      <h5>Software Defined Transformation</h5>
                      <p>AWS Cloud Migration For a Large Motor Industry.</p>
                      <a className="btn">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <img src="https://res.cloudinary.com/papu/image/upload/v1617964296/test-image_kza5ja.jpg" alt="" />
                    <div className="d-block px-3 py-4 caption">
                      <h5>Realtime Monitoring</h5>
                      <p>Highly Scalable Extremely Customizable Realtime monitoring platform</p>
                      <a className="btn">Read More <i className="fa fa-long-arrow-alt-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block mx-lg-5 py-lg-5">
          <div className="d-block mx-lg-5">
            <div className="d-flex align-items-center justify-content-center px-lg-5 py-lg-3 application-box">
              <h3>Modernize Your Infra & Application</h3>
              <a href="#" className="btn touch-btn">Get In Touch!</a>
            </div>
          </div>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
        bannercontent: PropTypes.object,
  usecases: PropTypes.object
}

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
        <IndexPageTemplate
          bannercontent={frontmatter.bannercontent}
          usecases={frontmatter.usecases}
        />
      </Layout>
  )
}

IndexPage.propTypes = {
        data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
        frontmatter {
        bannercontent {
        title,
        text,
        service {
        img,
        name
      }
        }
        usecases {
        heading,
        cioimage
          cioservice {
        img,
        name
      }
          teamservice {
        img,
        name
      }
        }
      }
    }
  }
`
