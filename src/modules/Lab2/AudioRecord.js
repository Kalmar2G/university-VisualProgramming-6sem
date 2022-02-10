import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const AudioRecord = ({ title, album, author, duration, index, link }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <tr
        className="table-row"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Grid container>
          <Grid item xs={1}>
            <td className="table-row__data">
              {isHover ? (
                <a target="_blank" rel="noreferrer" href={link}>
                  <PlayArrowIcon />
                </a>
              ) : (
                <span>{index}</span>
              )}
            </td>
          </Grid>
          <Grid item xs={3}>
            <td className="table-row__data">
              <span>{title}</span>
            </td>
          </Grid>
          <Grid item xs={3}>
            <td
              className="table-row__data"
              style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              <span>{author}</span>
            </td>
          </Grid>
          <Grid item xs={2}>
            <td className="table-row__data">
              <span>{album}</span>
            </td>
          </Grid>

          <Grid item xs={3}>
            <td className="table-row__data">
              <span>{duration}</span>
            </td>
          </Grid>
        </Grid>
      </tr>
      <Divider />
    </>
  );
};

AudioRecord.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  album: PropTypes.string,
  duration: PropTypes.string,
  index: PropTypes.number,
  link: PropTypes.string,
};

export default AudioRecord;
