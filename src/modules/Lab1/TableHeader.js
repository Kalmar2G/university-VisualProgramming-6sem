import React from 'react';
import { Grid } from '@material-ui/core';
import './styles.css';

const TableHeader = () => {
  return (
    <thead>
      <tr className="table-header_lab1">
        <Grid container>
          <Grid item xs={1}>
            <td className="table-header__item" />
          </Grid>
          <Grid item xs={3}>
            <td className="table-header__item">
              <span>Cтрана</span>
            </td>
          </Grid>
          <Grid item xs={3}>
            <td className="table-header__item">
              <span>Город</span>
            </td>
          </Grid>
          <Grid item xs={2}>
            <td className="table-header__item">
              <span>Улица</span>
            </td>
          </Grid>
          <Grid item xs={3}>
            <td className="table-header__item">
              <span>Номер дома</span>
            </td>
          </Grid>
        </Grid>
      </tr>
    </thead>
  );
};

export default TableHeader;
