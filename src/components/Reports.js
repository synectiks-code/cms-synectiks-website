import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import remark from 'remark';
import remarkHTML from 'remark-html';
import { v4 } from 'uuid';
const toHTML = (value) =>
  remark().use(remarkHTML).processSync(value).toString();

const Reports = ({ reports }) => (
  <div className=' d-flex flex-nowrap'>
    {reports.map((report) => (
      <article key={v4()} className='p-2'>
        <div className='message-body'>
          <h3>{report.text}</h3>
          <HTMLContent content={toHTML(report.description)} />
        </div>
      </article>
    ))}
  </div>
);

Reports.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Reports;
