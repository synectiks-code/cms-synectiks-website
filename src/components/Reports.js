import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Reports = ({ reports }) => (
  <div className=' d-flex flex-nowrap'>
    {reports.map((report) => (
      <article key={v4()} className='p-2'>
        <div className='message-body'>
          {report.text}
          {report.description}
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
