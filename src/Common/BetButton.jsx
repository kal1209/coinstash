import React from 'react';
import PropTypes from 'prop-types';

function BetButton({ title, onClick, count, icon }) {
  return (
    <button onClick={onClick} className="flex items-center bg-[#2E2E2E] hover:bg-black rounded-lg text-center self-center px-2 md:px-4 py-1 my-2 mx-2 text-xs md:text-base gap-3">
      {icon} {title}
      <span className="bg-[#474545] text-white py-1 px-2 text-center rounded-full">
        {count}
      </span>
    </button>
  );
}

BetButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
};

export default BetButton;
