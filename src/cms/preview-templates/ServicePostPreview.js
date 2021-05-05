import React from 'react'
import PropTypes from 'prop-types'
import { ServicePostTemplate } from '../../templates/service-post';
import Layout from './Layout';

const ServicePostPreview = ({ entry, widgetFor, getAsset }) => {
  let whyUs = entry.getIn(['data', 'whyus']);
  whyUs = whyUs ? whyUs.toJS() : null;
  let aproach = entry.getIn(['data', 'aproach']);
  aproach = aproach ? aproach.toJS() : null;
  let gettingstarted = entry.getIn(['data', 'gettingstarted']);
  gettingstarted = gettingstarted ? gettingstarted.toJS() : null;
  return (
    <Layout>
      <ServicePostTemplate
        title={entry.getIn(['data', 'title'])}
        bannerdescription={entry.getIn(['data', 'bannerdescription'])}
        bannerimage={entry.getIn(['data', 'bannerimage'])}
        bannericon={entry.getIn(['data', 'bannericon'])}
        bannericonname={entry.getIn(['data', 'bannericonname'])}
        whyus={whyUs}
        aproach={aproach}
        gettingstarted={gettingstarted}
      />
    </Layout>
  )
}

ServicePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default ServicePostPreview
