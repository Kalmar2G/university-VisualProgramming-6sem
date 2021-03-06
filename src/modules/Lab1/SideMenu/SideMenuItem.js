import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SideMenuItem = ({ type, depth }) => {
  return (
    <Box className="sideMenuItem">
      <Grid container>
        <Grid item xs={1 + depth} />
        <Grid container item xs={12 - depth - 2} justifyContent="flex-start">
          {type === 'folder' && <ArrowDropDownIcon />}
          {type === 'folder' && <FolderIcon />}
          {type === 'file' && depth > 0 && <Grid item xs={1} />}
          {type === 'file' && <DescriptionIcon />}
          <p>{type}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

SideMenuItem.propTypes = {
  type: PropTypes.string,
  depth: PropTypes.number,
};

export default SideMenuItem;
