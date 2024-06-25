import React from 'react';
import PropTypes from 'prop-types';

function Card({ children }) {
  return (
    <div className="flex flex-col">
      <div className="relative p-1 rounded-xl flex-grow">
        <div className="bg-secondary rounded-xl flex items-center justify-center p-2 h-full">
          <div className="absolute top-0 left-0 bg-dotfill h-3 w-3 rounded-full m-3"></div>
          <div className='px-4 md:px-12 py-2 md:py-4'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
