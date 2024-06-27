import React from 'react';
import PropTypes from 'prop-types';

function RoundButton({ title, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center bg-red-500 hover:bg-red-600 rounded-3xl text-center self-center px-4 md:px-8 py-1 md:py-2 my-2 mx-2 gap-2 text-xs md:text-base">{title}</button>
  );
}

RoundButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
};

export default RoundButton;
