import React from 'react';
import { FaCodeFork } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import BetButton from '../Common/BetButton';
import Card from '../Common/Card';
import RoundButton from '../Common/RoundButton';

const BabylonToolkit = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className='bg-primary py-8 md:py-20 flex flex-col text-center gap-4 rounded-xl'>
        <p className='text-3xl font-bold'>Technology for Web3 Browser Games</p>
        <div className="w-full px-8 md:px-16 gap-8">
          <div className='pb-8'>
            <Card>
              <div className='py-8'>
                <div className='flex gap-2 md:gap-4'>
                  <div className="w-3/5">
                    <span className='grid'>
                      <p className='pb-6 text-start text-base md:text-xl'>The powerful <span className='font-bold'>babylon.js</span> framework is <span className='font-bold'>integrated into the Unity</span> editor</p>
                      <ul className='list-disc text-start pl-6 md:pl-20 text-sm md:text-lg'>
                        <li>script components</li>
                        <li>scene manager</li>
                        <li>urp shader materials</li>
                        <li>collision meshes</li>
                        <li>terrain builder</li>
                        <li>animation state</li>
                        <li>run time prefabs</li>
                        more...
                      </ul>
                    </span>
                  </div>
                  <div className="w-2/5 grid justify-items-center gap-3">
                    <img src="./images/babylon.png" alt="babylon" />
                    <img src="./images/gear.png" width={60} alt="gear" />
                    <img src="./images/unity-black.png" alt="unity-black" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className='pb-8'>
            <Card>
              <div className='py-8'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 items-center'>
                  <div className="md:w-1/2">
                    <span className='grid text-start'>
                      <p className='pb-8 text-start text-base md:text-xl'>
                        <span className='font-bold'>Export Unity 3D</span> Games with <span className='font-bold'>BabylonToolkit</span> to <span className='font-bold'>Play</span> on Desktop and Mobile Browsers
                      </p>
                      <div className='flex flex-col gap-4'>
                        <div className='flex gap-8'>
                          <img src="./images/nele.png" alt="nele" />
                          <img src="./images/havok.png" alt="havok" />
                        </div>
                        <div className='flex gap-8'>
                          <img src="./images/payment.png" alt="payment" />
                          <span>
                            <p>Direct to Consumer</p>
                            <p>Receive Payments in FIAT or Crypto</p>
                          </span>
                        </div>
                        <div className='flex gap-8'>
                          <img src="./images/heart.png" alt="heart" />
                          Overlays for Promotion and Monetization
                        </div>
                      </div>
                    </span>
                  </div>
                  <div className="md:w-1/2 grid justify-items-center gap-3">
                    <img src="./images/cage.png" alt="cage" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className='pb-8'>
            <Card>
              <div className='py-8'>
                <div className='flex flex-col gap-2 md:gap-4 items-start'>
                  <p className='text-3xl font-bold'>Tutorials</p>
                  <img className="w-full" src="./images/market.png" alt="market" />
                </div>
              </div>
            </Card>
          </div>
          <div className='pb-8 flex flex-row gap-4 items-stretch'>
            <div className="w-1/3">
              <Card bonusClass='h-full' itemsCenter={false}>
                <div className='py-8'>
                  <div className='flex gap-2 md:gap-4'>
                    <span className='grid justify-items-center'>
                      <p className='pb-6 text-start text-lg md:text-2xl font-bold'>Basic Edition</p>
                      <ul className='list-disc text-start text-sm md:text-lg'>
                        <li>Unity content creation plugin</li>
                        <li>Managed runtime script components</li>
                        <li>Comprehensive lightmap baking</li>
                        <li>Multiple file texture formats</li>
                        <li>One click project deployment</li>
                        <li>Host web project generation</li>
                      </ul>
                      <p className='text-xl pt-4 font-bold text-[#89DCFF]'>Free</p>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="w-1/3">
              <Card bonusClass='h-full' itemsCenter={false}>
                <div className='py-8'>
                  <div className='flex gap-2 md:gap-4'>
                    <span className='grid justify-items-center'>
                      <p className='pb-6 text-start text-lg md:text-2xl font-bold'>Indie Pro Edition</p>
                      <ul className='list-disc text-start text-sm md:text-lg'>
                        <p className='text-[#2B3A84]'>Everything in Basic, plus:</p>
                        <li>Rigidbody physics system</li>
                        <li>Animation state machines</li>
                        <li>Player character controllers</li>
                        <li>Recast navigation meshes</li>
                        <li>Detour path following</li>
                        <li>Audio source components</li>
                        <li>Video player components</li>
                        <li>Terrain building tools</li>
                      </ul>
                      <p className='text-xl pt-4 font-bold text-[#89DCFF]'>$99 Annual Subscription</p>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="w-1/3">
              <Card bonusClass='h-full' itemsCenter={false}>
                <div className='py-8'>
                  <div className='flex gap-2 md:gap-4'>
                    <span className='grid justify-items-center'>
                      <p className='pb-6 text-start text-lg md:text-2xl font-bold'>Premium Edition</p>
                      <ul className='list-disc text-start text-sm md:text-lg'>
                        <p className='text-[#2B3A84]'>Everything in Pro, plus:</p>
                        <li>Two additional seats</li>
                        <li>Networking components</li>
                        <li>Player avatar components</li>
                        <li>Managed racing components</li>
                      </ul>
                      <p className='text-xl pt-4 font-bold text-[#89DCFF]'>$299 Annual Subscription</p>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className="basis-1/4"></div>
            <div className="basis-1/2">
              <Card>
                <div className='pb-4'>
                  <div className='flex gap-2 md:gap-4'>
                    <span className='grid justify-items-center'>
                      <p className='text-start text-lg md:text-2xl font-bold'>Enterprise</p>
                      <p className='pt-4'>Contact us for full development support </p>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="pt-4 grid justify-items-center gap-4">
            <img className='w-20' src="./images/toolkit.png" alt="toolkit" />
            <p className='font-bold text-3xl'>babylon toolkit</p>
            <RoundButton title={'Free Download'} />
            <div className="flex flex-row">
              <BetButton icon={<FaCodeFork />} title={'Fork'} count={'46'} />
              <BetButton icon={<IoMdStarOutline />} title={'Star'} count={'168'} />
            </div>
          </div>
          <div className='pt-8 px-8 md:px-20 text-start'>
            <p className='text-4xl font-bold'>Testimonials</p>
            <div className="px-8 md:px-20 pt-8 gap-8 grid justify-items-center">
              <span className='grid justify-items-center'>
                <p className='text-center text-xl'>Productivity using toolkit for native BabylonJs development vs not is off the chain. I don’t really know how to put a number on that, but I would imagine that boost in productivity is 50+ percent.
                </p>
                <p className='text-xl text-[#2B3A84]'>Developer Mackey Kinard</p>
              </span>
              <RoundButton title={'Forum'} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BabylonToolkit;
