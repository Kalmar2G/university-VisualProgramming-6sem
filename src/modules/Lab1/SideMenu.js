import React from 'react';
import { TextField } from '@material-ui/core';
import SideMenuItem from './SideMenuItem';

const data = [
  { type: 'folder', depth: 0 },
  { type: 'folder', depth: 1 },
  { type: 'folder', depth: 2 },
  { type: 'file', depth: 3 },
  { type: 'file', depth: 3 },
  { type: 'file', depth: 3 },
  { type: 'file', depth: 0 },
  { type: 'file', depth: 0 },
  { type: 'folder', depth: 0 },
  { type: 'file', depth: 1 },
  { type: 'folder', depth: 0 },
  { type: 'file', depth: 1 },
  { type: 'file', depth: 1 },
  { type: 'file', depth: 1 },
  { type: 'folder', depth: 0 },
];

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <TextField placeholder="Поиск по файлам" />
      {data.map((item) => (
        <SideMenuItem type={item.type} depth={item.depth} />
      ))}
    </div>
  );
};

export default SideMenu;
