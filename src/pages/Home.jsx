import React from 'react';
import Card from '../Common/Card'
import ArrowButton from '../Common/ArrowButton';
import LinkButton from '../Common/LinkButton';
import { ABOUT } from '../utils/constants';

const Home = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className='bg-primary py-2 pt-4 md:py-4 md:pt-8 flex flex-col text-center gap-4 rounded-xl'>
        <p className='text-3xl font-bold'>CoinStash Partners & Community</p>
        <div className="w-full px-8 md:px-16">
          <Card><img src="./images/company_title.png" alt="company-title" /></Card>
          <div className="grid grid-cols-2">
            <Card><img src="./images/usherlabs.png" alt="usher-labs" /></Card>
            <Card><img src="./images/babylon.png" alt="babylon" /></Card>
          </div>
        </div>
        <div className="flex justify-between items-end pl-8 md:pl-16">
          <div className='flex gap-4'>
            <img src="./images/telegram.svg" width={60} alt="" />
            <img src="./images/discord.svg" width={60} alt="" />
            <img src="./images/x-shape.svg" width={60} alt="" />
            <img src="./images/white-paper.svg" width={60} alt="" />
          </div>
          <ArrowButton title='NEXT' />
        </div>
      </div>
      <div className='bg-primary py-2 pt-4 md:py-4 md:pt-8 flex flex-col text-center gap-4 rounded-xl'>
        <span>
          <p className='text-3xl font-bold'>STASH Token</p>
          <p>CoinStash Web3 ecosystem transacting in the STASH token</p>
        </span>
        <div className="w-full px-2 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Card><img src="./images/artboard.png" alt="artboard" /></Card>
            <Card><img src="./images/arbitrum.png" alt="arbitrum" /></Card>
            <Card><img src="./images/uniswap.png" alt="uniswap" /></Card>
          </div>
        </div>
        <div className="flex justify-end">
          <ArrowButton title='NEXT' />
        </div>
      </div>
      <div className='bg-primary py-2 pt-4 md:py-4 md:pt-8 flex flex-col text-center gap-4 rounded-xl'>
        <span>
          <p className='text-3xl font-bold'>About</p>
        </span>
        <div className='px-8 md:px-20'>
          <div className="h-64 overflow-y-scroll">
            <div className='mr-4 md:mr-12 text-justify'>
              {ABOUT}
            </div>
          </div>
        </div>
        <div className="flex justify-between pl-8 md:pl-16">
          <LinkButton title={'Team'} />
          <ArrowButton title='TOP' />
        </div>
      </div>
    </div>
  );
};

export default Home;
