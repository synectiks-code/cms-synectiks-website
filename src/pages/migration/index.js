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
      }
    }
    .jumbo-right img {
      width: 150px;
      height: 150px;
    }
  }
  .jumbo-bottom {
    padding: 1em 7em;
    color: #fff;
    text-align: center;
    h3 {
      font-size: 38px;
      margin: 1em 0em 1em 0em;
    }
    .jumbo-bottom img {
      width: 100%;
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
    padding: 1em 7em;
    text-align: center;
    color: #fff;
    h3 {
      font-size: 38px;
      margin: 0em 0em 1em 0em;
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
              src='https://res.cloudinary.com/papu/image/upload/v1624456455/new-design/home-page/Images/modernization_epx6qy.jpg'
              alt=''
            />
            <div className='jumbo-left-text'>
              <p>
                Our open product based solutioning model help 50% gain in time &
                effort ,to reduce your technical debt, get your apps and
                infrastructure ready for any cloud
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
          <img
            src='https://res.cloudinary.com/papu/image/upload/b_rgb:ffffff/v1624462228/new-design/home-page/Images/capabilities_pmycpc.png'
            alt=''
          />
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
            src='https://res.cloudinary.com/papu/image/upload/b_rgb:fffdfd/v1624462228/new-design/home-page/Images/engagementmodel_rervaz.png'
            alt=''
          />
        </div>
      </Layout>
    </ModernizationWrapper>
  );
};

export default index;
