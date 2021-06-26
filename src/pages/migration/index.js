import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Capabilities from '../../img/migration&modernization/capabilities.png';
import Engagement from '../../img/migration&modernization/engagementmodel.png';

const ModernizationWrapper = styled.div`
  .jumbotron {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    .jumbo-left img {
      width: 100%;
    }
    .jumbo-left-text {
      padding: 1em;
      margin: 0 2em;
      background-color: #384cd8;
      p {
        color: #fff;
        font-size: 20px;
      }
    }
    .jumbo-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      h3 {
        font-size: 48px;
        text-align: center;
        text-transform: uppercase;
        margin-top: 1em;
      }
    }
    .jumbo-right img {
      width: 150px;
      height: 150px;
    }
  }
  .jumbo-bottom {
    padding: 1em 1.5em 3em 1.5em;
    color: #212529;
    background-color: #d2d4e0;
    text-align: center;
    margin: 3em 0em;
    display: grid;
    grid-gap: 0.4em;
    h3 {
      font-size: 38px;
      margin: 0.2em 0em 1em 0em;
    }
    .app {
      /* display: flex; */
      display: grid;
      grid-template-columns: 100px 1fr;
      color: #fff;
      align-items: center;
      grid-gap: 1em;
      padding: 0.5em 0.5em;
      background-color: #d62c37 !important;
      .app-img img {
        width: 125px;
        height: 125px;
        border: none;
        margin-bottom: -1em;
        box-shadow: none;
      }
      .app-blocks {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1em;
      }
      .text-block {
        height: 13vh;
        padding: 0.5em 1em;
        background-color: #fff;
        color: #212529;
        p {
          margin-bottom: 0em;
        }
      }
    }
    .data {
      background-color: #f58021 !important;
      display: flex;
      /* display: grid; */
      /* grid-template-columns: repeat(4, 1fr); */
      color: #fff;
      align-items: center;
      grid-gap: 1em;
      padding: 0.5em 0.5em;
      .data-img img {
        width: 185px;
        height: 125px;
        border: none;
        box-shadow: none;
        margin-bottom: -1em;
      }
      .text-block {
        padding: 0.5em;
        background-color: #fff;
        color: #212529;
        p {
          margin-bottom: 0em;
        }
      }
    }
    .process {
      display: flex;
      /* display: grid; */
      /* grid-template-columns: repeat(4, 1fr); */
      color: #fff;
      align-items: center;
      grid-gap: 1em;
      padding: 0em 0.5em;
      background-color: #86c542 !important;
      .pro-img img {
        width: 130px;
        height: 125px;
        border: none;
        box-shadow: none;
        margin-bottom: -1em;
      }
      .text-block {
        padding: 0.5em;
        background-color: #fff;
        color: #212529;
        p {
          margin-bottom: 0em;
        }
      }
    }
    .capabilities {
      display: flex;
      /* display: grid; */
      /* grid-template-columns: repeat(4, 1fr); */
      background-color: #6c53a4;
      color: #fff;
      align-items: center;
      grid-gap: 1em;
      padding: 0em 0.5em;
    }
    .infra-img img {
      width: 125px;
      height: 125px;
      border: none;
      box-shadow: none;
      margin-bottom: -1em;
    }
    .text-block {
      padding: 1em;
      background-color: #fff;
      color: #212529;
      p {
        margin-bottom: 0em;
      }
    }
    img {
      width: 100%;
      border: 5px solid white;
      box-shadow: 1px 1px 10px 2px black;
    }
  }

  .icon-section {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 3em;
    text-align: center;
    color: #fff;
    padding: 1em 3em;
  }
  .icons {
    color: #fff;
    text-align: center;
    h3 {
      font-size: 38px;
      margin: 1em 0em 1em 0em;
    }
  }
  .bottom {
    padding: 1em 7em 3em 7em;
    text-align: center;
    background-color: #d2d4e0;
    color: #212529;
    h3 {
      font-size: 38px;
      margin: 0em 0em 1em 0em;
    }
    img {
      border: 5px solid white;
      box-shadow: 1px 1px 10px 2px black;
    }
  }
`;
const index = () => {
  return (
    <ModernizationWrapper>
      <Layout>
        <div className='jumbotron'>
          <div className='jumbo-left'>
            <img
              src='https://res.cloudinary.com/papu/image/upload/b_rgb:ffffff,/v1624456455/new-design/home-page/Images/modernization_epx6qy.jpg'
              alt=''
            />
            <div className='jumbo-left-text'>
              <p>
                Reduce your technical debt, get your apps and infrastructure
                ready for any cloud
              </p>
            </div>
          </div>
          <div className='jumbo-right'>
            <img
              src='https://res.cloudinary.com/papu/image/upload/v1624527145/new-design/home-page/Images/migration_and_modernization_pekzxp.svg'
              alt=''
            />
            <h3>Migration and Modernization</h3>
          </div>
        </div>
        <div className='jumbo-bottom'>
          {/* <img src={Capabilities} alt='' /> */}
          <h3>Capabilities</h3>
          {/* <img
            src='https://res.cloudinary.com/papu/image/upload/bo_10px_solid_rgb:fff/v1624539278/new-design/home-page/Images/capabilities_eh4vwk.jpg'
            alt=''
          /> */}

          <div className='capabilities'>
            <div className='infra-img'>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1624527145/new-design/home-page/Images/migration_and_modernization_pekzxp.svg'
                alt=''
              />
              <h4>Infra</h4>
            </div>
            <div>
              <h6>Multi-Cloud Hybrid Adoption</h6>
              <div className='text-block'>
                <p>Multi cloud Hybrid infra management and operations</p>
              </div>
            </div>
            <div>
              <h6>Cloud-Migration</h6>
              <div className='text-block'>
                <p>Migrate existing workloads to any cloud</p>
              </div>
            </div>
            <div>
              <h6>Software Defined Transformation</h6>
              <div className='text-block'>
                <p>
                  Make entire infrastructure provisioning software defined and
                  automated
                </p>
              </div>
            </div>
          </div>
          <div className='app'>
            <div className='app-img'>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1624527145/new-design/home-page/Images/migration_and_modernization_pekzxp.svg'
                alt=''
              />
              <h4>App</h4>
            </div>
            <div className='app-blocks'>
              <div>
                <h6>Rapid App Development</h6>
                <div className='text-block'>
                  <p>
                    Develop microservice based cloud native custom business App
                  </p>
                </div>
              </div>
              <div>
                <h6>App Modernization</h6>
                <div className='text-block'>
                  <p>Api / Microservices / Container / DevSecOps Enablement</p>
                </div>
              </div>
              <div>
                <h6>App Migration</h6>
                <div className='text-block'>
                  <p>
                    Simplify, integrate and deliver applications on any platform
                  </p>
                </div>
              </div>
              <div>
                <h6>Cloud Native Transformation</h6>
                <div className='text-block'>
                  <p>
                    Migrate existing outdated proprietary application to Open
                    cloud native app
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='data'>
            <div className='data-img'>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1624527145/new-design/home-page/Images/migration_and_modernization_pekzxp.svg'
                alt=''
              />
              <h4>Data</h4>
            </div>
            <div>
              <h6>Fast-Data Transform</h6>
              <div className='text-block'>
                <p>
                  Increase Data Revenue with Realtime contextual AI-enabled
                  decision making system
                </p>
              </div>
            </div>
            <div>
              <h6>Data Management</h6>
              <div className='text-block'>
                <p>
                  Simplify Data backbone and its lifecycle to a reduced
                  Capex/Opex and higher business outcome
                </p>
              </div>
            </div>
            <div>
              <h6>Data Migration</h6>
              <div className='text-block'>
                <p>
                  Simplify and migrate data from any platform to any platform{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='process'>
            <div className='pro-img'>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1624527145/new-design/home-page/Images/migration_and_modernization_pekzxp.svg'
                alt=''
              />
              <h4>Process</h4>
            </div>
            <div>
              <h6>DevSecOps Enablement</h6>
              <div className='text-block'>
                <p>
                  Improve operational efficiency and development velocity with
                  DevSecOps adoption
                </p>
              </div>
            </div>
            <div>
              <h6>Business Process Automation</h6>
              <div className='text-block'>
                <p>
                  Optimize business processes with observability and data driven
                  Realtime decision making system
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='icons'>
          <h3>Differentiator</h3>
          <div className='icon-section'>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121015/new-design/hybrid-cloud/time-money_ixetxx.jpg'
                alt=''
              />
              <h5>Time & Money</h5>
              <p>
                Our open Product Driven Delivery Model allows customers to
                quickly build, deliver and orchestrate cross cloud services @50%
                time & cost
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121016/new-design/hybrid-cloud/experience_xgb6fu.jpg'
                alt=''
              />
              <h5>Experience</h5>
              <p>10+ Large Scale Migration And Modernization experience</p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121016/new-design/hybrid-cloud/expertise_rrxipa.jpg'
                alt=''
              />
              <h5>Expertise</h5>
              <p>
                Experience Team with a proven track record of CloudOps delivery
                enabled with DevSecOps Capabilities
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/long-term-retention_nm2mea.jpg'
                alt=''
              />
              <h5>Long Term Retention</h5>
              <p>
                100% Customer Retention Rate substantiated by excellent services
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/single-control-pane_znkvet.jpg'
                alt=''
              />
              <h5>Single Control Panel</h5>
              <p>
                Xformation Product is a single platform to manage all your
                workloads distributed across multiple clouds and boundaries
                within a single control plane
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121045/new-design/hybrid-cloud/compliance-security_ysw8nm.jpg'
                alt=''
              />
              <h5>Compliance & Security</h5>
              <p>
                Our compliance and security assessment tools make sure your
                hybrid cloud journey meets your business compliance
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121043/new-design/hybrid-cloud/e2e-solution_pl64jw.jpg'
                alt=''
              />
              <h5>E2E Solution</h5>
              <p>
                Single point of contact for Application Migration,
                Transformation and Integration to cloud-native Apps services
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/public-cloud-partnership_qmst7o.jpg'
                alt=''
              />
              <h5>Public Cloud Partnership</h5>
              <p>
                Our advanced partnership with major public cloud providers help
                you to get support at every stage
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121043/new-design/hybrid-cloud/demo-environment_jx5des.jpg'
                alt=''
              />
              <h5>Open-Source Contribution</h5>
              <p>
                Committed to codifying our know-how, we write open Products and
                Distribute
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121044/new-design/hybrid-cloud/optimization-service_qyylkr.jpg'
                alt=''
              />
              <h5>Optimization Service</h5>
              <p>We do optimal resource pooling from multiple clouds</p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620121043/new-design/hybrid-cloud/engagement-model_wfxnsk.jpg'
                alt=''
              />
              <h5>Engagement Model</h5>
              <p>
                Our every engagement focused on empowerment – not dependency
              </p>
            </div>
            <div>
              <img
                src='https://res.cloudinary.com/papu/image/upload/v1620222870/new-design/hybrid-cloud/extreme-automation_yk9gzn.jpg'
                alt=''
              />
              <h5>Extreme Automation</h5>
              <p>
                Use our existing automation capabilities to automate
                infrastructure, operations, security in hybrid IT environment
              </p>
            </div>
          </div>
        </div>
        <div className='bottom'>
          {/* <img src={Engagement} alt='' /> */}
          <h3>Engagement Model</h3>
          <img
            src='https://res.cloudinary.com/papu/image/upload/v1624540148/new-design/home-page/Images/engagementmodel_sbylsq.jpg'
            alt=''
          />
        </div>
      </Layout>
    </ModernizationWrapper>
  );
};

export default index;
