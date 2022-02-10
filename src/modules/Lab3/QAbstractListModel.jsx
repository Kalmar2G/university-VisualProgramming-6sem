import React from 'react';
import PropTypes from 'prop-types';
import '../Lab2/styles.css';

const QAbstractListModel = ({ data, getter }) => {
  return (
    <tbody className="table-body">
      {data.map((el, index) => (
        <tr className="table_queue-row" key={index}>
          {Object.keys(el).map((key) => (
            <td key={key} className="table_queue-row__data">
              {getter.getText(el[key])}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

QAbstractListModel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  getter: PropTypes.func,
};
export default QAbstractListModel;
