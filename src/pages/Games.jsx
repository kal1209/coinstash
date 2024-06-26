import React from 'react';
import ArrowButton from '../Common/ArrowButton';
import LinkButton from '../Common/LinkButton';

const Game = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 pt-6">
      <div className='bg-primary py-2 pt-4 md:py-4 md:pt-8 flex flex-col text-center gap-4 rounded-xl'>
        <div className="flex justify-center gap-4 md:gap-16 pb-2 md:pb-4">
          <img src="./images/threejs.png" width={120} alt="threejs" />
          <img src="./images/arbitrum.png" width={120} alt="arbitrum" />
        </div>
        <div className="w-full px-8 md:px-16 flex justify-center">
          <img src="./images/market.png" className='md:w-3/4' alt="market" />
        </div>
        <div className="flex justify-between items-end pl-8 md:pl-16">
          <div></div>
          <LinkButton title={'Play on Desktop Web Browser'} />
          <ArrowButton title='NEXT' />
        </div>
      </div>
      <div className='bg-primary py-2 pt-4 md:py-4 md:pt-8 flex flex-col text-center gap-4 rounded-xl'>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-2 md:px-20">
          <img class="h-12" src="./images/burnout.png" alt="burnout" />
          <div className='flex items-center gap-4'>
            <img class="h-16" src="./images/unity.png" alt="unity" />
            <img class="h-8" src="./images/arrow-right.png" alt="arrow-right" />
            <img class="h-16" src="./images/babylon-mark.png" alt="babylon" />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 flex justify-center">
          <img src="./images/burnout-bg.png" alt="burnout-bg" />
        </div>
        <div className="flex justify-between items-end pl-8 md:pl-16">
          <div></div>
          <LinkButton title={'Play on Desktop Web Browser'} />
          <ArrowButton title='NEXT' />
        </div>
      </div>
      <div className='bg-primary py-2 pt-4 md:py-4 md:pt-8 flex flex-col text-center gap-4 rounded-xl'>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-2 md:px-20">
          <img class="h-12" src="./images/grip.png" alt="grip" />
          <div className='flex items-center gap-4'>
            <img class="h-16" src="./images/unreal.png" alt="unreal" />
            <img class="h-8" src="./images/arrow-right.png" alt="arrow-right" />
            <img class="h-16" src="./images/babylon-mark.png" alt="babylon" />
          </div>
        </div>
        <div className="w-full px-2 md:px-4 flex justify-center">
          <img src="./images/grip-bg.png" alt="grip-bg" />
        </div>
        <div className="flex justify-between items-center pl-4 md:pl-8">
          <span className='text-left text-xs'>
            <p>**Unreal Conversion Only.</p>
            <p>GRIP is developed by Caged Element </p>
          </span>
          <LinkButton title={'Play on Desktop Web Browser'} />
          <ArrowButton title='NEXT' />
        </div>
      </div>
    </div>
  );
};

export default Game;
