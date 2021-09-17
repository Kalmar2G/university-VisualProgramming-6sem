import { init } from 'utils/tree/main';
import { useEffect } from 'react';

export const TreesPage = () => {
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <p>TreesPage</p>
      <div id="fault-tree" style={{ width: 600, height: 600 }} />
    </>
  );
};
