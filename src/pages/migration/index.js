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
      }
    }
    .jumbo-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    .jumbo-right img {
      width: 150px;
      height: 150px;
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
              src='https://res.cloudinary.com/papu/image/upload/v1620121045/new-design/hybrid-cloud/time-money_vfsbzw.jpg'
              alt=''
            />
            <h3>Migration and Modernization</h3>
          </div>
        </div>
      </Layout>
    </ModernizationWrapper>
  );
};

export default index;
