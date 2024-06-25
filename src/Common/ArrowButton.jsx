import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowUpDoubleFill, RiArrowDownDoubleFill } from "react-icons/ri";

function ArrowButton({ title, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center justify-center w-20 h-20 rounded-full cursor-pointer hover:opacity-50 transition duration-300 gap-1">
      <p className='text-xs'>{title}</p>
      {title === 'TOP' ? <RiArrowUpDoubleFill size={24} /> : <RiArrowDownDoubleFill size={24} />}
    </div >
  );
}

ArrowButton.propTypes = {
  onClick: PropTypes.func,
};

export default ArrowButton;
