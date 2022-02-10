import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { Button } from '../common/Button';
import music from './compositions.json';
import './styles.css';

const TableHeader = ({ onChangeFilters }) => {
  const albumFilterArray = [
    ...new Set(music.map((song) => song.album).filter((album) => album !== '')),
  ];
  const authorsFilterArray = [...new Set(music.map((song) => song.author))];
  const [albumFilter, setAlbumFilter] = useState('');
  const [authorsFilter, setAuthorsFilter] = useState('');
  const [titlesFilter, setTitlesFilter] = useState('');

  const clearFilters = () => {
    setAlbumFilter('');
    setTitlesFilter('');
    setAuthorsFilter('');
  };

  useEffect(
    () => onChangeFilters(albumFilter, authorsFilter, titlesFilter),
    [albumFilter, authorsFilter, onChangeFilters, titlesFilter]
  );

  return (
    <thead>
      <tr className="table-header">
        <Grid container>
          <Grid item xs={1}>
            <td className="table-header__item">
              <Button onClick={clearFilters}>
                <span>Clear</span>
              </Button>
            </td>
          </Grid>
          <Grid item xs={3}>
            <td className="table-header__item">
              <span>название</span>
              <input
                className="input"
                type="text"
                name="name"
                value={titlesFilter}
                onChange={(e) => setTitlesFilter(e.target.value)}
              />
            </td>
          </Grid>
          <Grid item xs={3}>
            <td className="table-header__item">
              <span>автор</span>
              <select
                className="select"
                value={authorsFilter}
                onChange={(e) => setAuthorsFilter(e.target.value)}
              >
                <option value="">не выбрано</option>
                {authorsFilterArray.map((author) => (
                  <option value={author}>{author}</option>
                ))}
              </select>
            </td>
          </Grid>
          <Grid item xs={2}>
            <td className="table-header__item">
              <span>альбом</span>
              <select
                className="select"
                value={albumFilter}
                onChange={(e) => setAlbumFilter(e.target.value)}
              >
                <option value="">не выбран</option>
                {albumFilterArray.map((album) => (
                  <option value={album}>{album}</option>
                ))}
              </select>
            </td>
          </Grid>
          <Grid item xs={2}>
            <td
              className="table-header__item"
              style={{ alignSelf: 'flex-end', marginLeft: '80px' }}
            >
              <span>длительность</span>
            </td>
          </Grid>
        </Grid>
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onChangeFilters: PropTypes.func,
};

export default TableHeader;
