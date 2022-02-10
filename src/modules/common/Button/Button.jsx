import PropTypes from 'prop-types';
import './styles.css';

export const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} type="submit" className={className || 'button'}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
