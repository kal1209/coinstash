import React from 'react';
import PropTypes from 'prop-types';
import { TbWorldUp } from "react-icons/tb";

function LinkButton({ title, onClick }) {
  return (
    <button onClick={onClick} className="flex items-center bg-red-500 hover:bg-red-600 rounded-2xl text-center self-center px-2 md:px-4 py-1 my-2 mx-2 gap-2 text-xs md:text-base"><TbWorldUp size={20} /> <span className='underline'>{title}</span></button>
  );
}

LinkButton.propTypes = {
  onClick: PropTypes.func,
};

export default LinkButton;
