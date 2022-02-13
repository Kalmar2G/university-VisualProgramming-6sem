import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ header }) => {
  const [tabs, setTabs] = useState([
    'вкладка',
    'вкладка',
    'вкладка',
    'вкладка',
    'вкладка',
    'вкладка',
    'вкладка',
  ]);
  const onDelete = () => {
    setTabs((prev) => prev.filter((el, index) => index !== 0));
  };
  const onAdd = () => {
    setTabs((prev) => [...prev, 'вкладка']);
  };
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
        {tabs.map((tab, index) => (
          <Tab text={`${tab} ${index + 1}`} onDelete={onDelete} key={index} />
        ))}
        <AddIcon onClick={onAdd} />
      </div>
    </>
  );
};
Tabs.propTypes = {
  header: PropTypes.bool,
};
export default Tabs;
