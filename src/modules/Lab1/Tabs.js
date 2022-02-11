import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tab from './Tab';

const tabs = [
  'вкладка 1',
  'вкладка 2',
  'вкладка 3',
  'вкладка 4',
  'вкладка 5',
  'вкладка 6',
  'вкладка 7',
];

const Tabs = ({ header }) => {
  return (
    <>
      {header && (
        <div className="SubdHeader">
          <Grid container justifyContent="flex-end">
            <Grid item sm={5}>
              <span>МАКЕТ ИНТЕРФЕЙСА СУБД</span>
            </Grid>
            <Grid item container sm={2} justifyContent="flex-end">
              <AspectRatioIcon />
              <CancelIcon />
            </Grid>
          </Grid>
        </div>
      )}
      <div className="tabsWrapper">
        {tabs.map((tab) => (
          <Tab text={tab} />
        ))}
      </div>
    </>
  );
};
Tabs.propTypes = {
  header: PropTypes.bool,
};
export default Tabs;
