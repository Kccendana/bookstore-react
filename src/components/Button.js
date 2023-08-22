import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label, className, onClick,
}) => (
  <button className={className} onClick={onClick} type="button">
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  onClick: null,
};

export default Button;
