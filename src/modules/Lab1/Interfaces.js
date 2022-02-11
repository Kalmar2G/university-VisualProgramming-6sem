import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import Tabs from './Tabs';
import SideMenu from './SideMenu';
import './styles.css';
import MainArea from './MainArea';

export const Interfaces = () => {
  return (
    <div className="wrapper">
      <Tabs header />
      <Divider />
      <Grid className="flex" container>
        <SideMenu />
        <MainArea />
      </Grid>
    </div>
  );
};
