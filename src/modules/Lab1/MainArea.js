import React from 'react';
import { Divider, Grid, TextField } from '@material-ui/core';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from './Tabs';
import TableHeader from './TableHeader';
import TableRecord from './TableRecord';

const MainArea = () => {
  return (
    <div className="mainArea">
      <Tabs />
      <Divider />
      <div className="mainAreaFilters">
        <Grid container>
          <Grid item sm={6}>
            <TextField placeholder="Поиск в системе" style={{ width: '350px' }} />
          </Grid>
          <Grid item sm={1}>
            <span>ФИЛЬТРЫ</span>
          </Grid>
          <Grid container item sm={5} justifyContent="space-around">
            <Filter1Icon />
            <Filter2Icon />
            <Filter3Icon />
            <FilterListIcon />
            <SearchIcon />
          </Grid>
        </Grid>
        <div className="table-wrapper_lab1">
          <table className="table_lab1">
            <TableHeader />
            <tbody className="table-body">
              {new Array(8).fill(0).map((record, index) => (
                <TableRecord index={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
