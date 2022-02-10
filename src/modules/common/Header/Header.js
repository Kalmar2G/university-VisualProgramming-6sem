import { Link } from 'react-router-dom';
import './styles.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/lab1">Lab 1</Link>
      <Link to="/lab2">Lab 2</Link>
      <Link to="/lab3">Lab 3</Link>
    </div>
  );
};
