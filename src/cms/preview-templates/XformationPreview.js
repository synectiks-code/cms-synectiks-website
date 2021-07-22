import React from 'react'
import PropTypes from 'prop-types'
import { XformationPageTemplate } from '../../templates/xformation-post'

const XformationPagePreview = ({ entry }) => {
  const entrySlider = entry.getIn(['data', 'slider'])
  const slider = entrySlider ? entrySlider.toJS() : []
  const entryScenarios = entry.getIn(['data', 'scenarios']);
  const scenarios = entryScenarios ? entryScenarios.toJS() : []
  return (
    <XformationPageTemplate
      slider={slider}
      scenarios={scenarios}
    />
  )
}

XformationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default XformationPagePreview
