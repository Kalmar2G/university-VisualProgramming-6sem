import { init } from 'utils/tree/main';
import { useEffect } from 'react';
// import { faultTreeNodeService } from 'services/FaultTreeNode.service';
//
// console.log(faultTreeNodeService.getAll());
// faultTreeNodeService.create({ id: '123', name: '321' });
// faultTreeNodeService.update({ id: '123', age: '123' })
// faultTreeNodeService.remove('123'))

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
