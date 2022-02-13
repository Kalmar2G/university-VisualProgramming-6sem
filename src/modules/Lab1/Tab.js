import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import { Box, Grid } from '@material-ui/core';

const Tab = ({ text, onDelete }) => {
  return (
    <Box className="tab">
      <Grid container>
        <Grid item sm={9}>
          {text}
        </Grid>
        <Grid item sm={3}>
          <CancelIcon fontSize="small" onClick={onDelete} />
        </Grid>
      </Grid>
    </Box>
  );
};
Tab.propTypes = {
  text: PropTypes.string,
  onDelete: PropTypes.func,
};
export default Tab;
