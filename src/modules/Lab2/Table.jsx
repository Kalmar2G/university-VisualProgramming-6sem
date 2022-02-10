import React, { useState, useCallback } from 'react';
import TableHeader from './TableHeader';
import AudioRecord from './AudioRecord';
import songs from './compositions.json';
import './styles.css';

export const Table = () => {
  const [data, setData] = useState(songs);
  const onChangeFilters = useCallback((albumFilter, authorsFilter, titlesFilter) => {
    const newData = songs.filter((song) => {
      const checkAuthor = authorsFilter === '' ? true : song.author === authorsFilter;
      const checkAlbum = albumFilter === '' ? true : song.album === albumFilter;
      const checkTitle =
        titlesFilter === '' ? true : song.title.toLowerCase().includes(titlesFilter.toLowerCase());
      return checkAuthor && checkAlbum && checkTitle;
    });
    setData(newData);
  }, []);
  return (
    <div className="table-wrapper">
      <table className="table">
        <TableHeader onChangeFilters={onChangeFilters} />
        <tbody className="table-body">
          {data.length ? (
            data.map((record, index) => (
              <AudioRecord
                title={record.title}
                album={record.album}
                author={record.author}
                duration={record.duration}
                index={index + 1}
                link={record.link}
              />
            ))
          ) : (
            <div className="search-status">
              <span>По заданным фильтрам композиций не найдено</span>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};
