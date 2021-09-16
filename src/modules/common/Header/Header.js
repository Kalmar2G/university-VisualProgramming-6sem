import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <Link to="/trees">trees</Link>
      <Link to="/faultTreeNodeDictionary">faultTreeNodeDictionary</Link>
      <Link to="/scenarios">scenarios</Link>
    </div>
  );
};
