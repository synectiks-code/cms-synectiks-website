import React from 'react';
import PropTypes from 'prop-types';
import { CasePostTemplate } from '../../templates/case-study';

const CasePostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <CasePostTemplate
      content={widgetFor('body')}
      bannerdescription={entry.getIn(['data', 'bannerdescription'])}
      bannerimage={entry.getIn(['data', 'bannerimage'])}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

CasePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CasePostPreview;
