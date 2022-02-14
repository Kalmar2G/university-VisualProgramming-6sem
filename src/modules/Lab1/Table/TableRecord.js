import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider } from '@material-ui/core';

const TableRecord = ({ index }) => {
  return (
    <>
      <tr className="table-row">
        <Grid container>
          <Grid item xs={1}>
            <td className="table-row__data">
              <span>{index}</span>
            </td>
          </Grid>
          <Grid item xs={3}>
            <td className="table-row__data">
              <span>Страна</span>
            </td>
          </Grid>
          <Grid item xs={3}>
            <td className="table-row__data">
              <span>Город</span>
            </td>
          </Grid>
          <Grid item xs={2}>
            <td className="table-row__data">
              <span>Улица</span>
            </td>
          </Grid>

          <Grid item xs={3}>
            <td className="table-row__data">
              <span>Номер дома</span>
            </td>
          </Grid>
        </Grid>
      </tr>
      <Divider />
    </>
  );
};

TableRecord.propTypes = {
  index: PropTypes.number,
};

export default TableRecord;
