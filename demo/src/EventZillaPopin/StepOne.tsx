'use client';

import { Close } from '@components/icons/Close';
import UserFriend from '@components/icons/UserFriend';
import Button from '../Buttons/Button';
import './StepOne.css';
import StatusTrack from './StatusTrack';
import './StatusTrack.css';
import { number } from 'zod';

type StepOneProps = {
  next: any;
  currentStep: number;
  completedSteps : number[]
};

const StepOne = ({ next, currentStep, completedSteps }: StepOneProps) => {
  return (
    <div className="flex">
      <div className="h-[600px] w-[600px] overflow-auto bg-white shadow-lg">
        <div className="flex justify-between mx-[30px] mt-6">
          <h1>SELECTIONNEZ UNE DATE</h1>
          <Close width={15} height={15} />
        </div>
        <div className="mt-8">
          <StatusTrack currentStep={currentStep} completedSteps={completedSteps} />
        </div>
        <div className="flex mt-20 justify-between mx-[50px]">
          <div className="flex items-center justify-center flex-col gap-5">
            <span>
              Lundi 4 <span className="text-[#72a8d0]">MARS</span>
            </span>
            <span>10:00 - 12:00</span>
            <span>14:00 - 16:00</span>
            <hr />
            <span>
              Lundi 4 <span className="text-[#72a8d0]">MARS</span>
            </span>
            <span>10:00 - 12:00</span>
            <span>14:00 - 16:00</span>
            <hr />
            <span>
              Lundi 4 <span className="text-[#72a8d0]">MARS</span>
            </span>
            <span>10:00 - 12:00</span>
            <span>14:00 - 16:00</span>
            <hr />
            <span>
              Lundi 4 <span className="text-[#72a8d0]">MARS</span>
            </span>
            <span>10:00 - 12:00</span>
            <span>14:00 - 16:00</span>
            <hr />
          </div>

          <div className="flex flex-col items-center justify-center gap-5 mt-8">
            <button onClick={next} className={`bg-[#72a8d0] text-black rounded-md`}>
              S'INSCRIRE
            </button>
            <button className="bg-[#72a8d0] text-black rounded-md">S'INSCRIRE</button>
            <hr />
            <button className="bg-[#72a8d0] text-black rounded-md">S'INSCRIRE</button>
            <button className="bg-[#72a8d0] text-black rounded-md">S'INSCRIRE</button>
            <hr />
            <button className="bg-[#72a8d0] text-black rounded-md">S'INSCRIRE</button>
            <button className="bg-[#72a8d0] text-black rounded-md">S'INSCRIRE</button>
            <hr />
            <button className="bg-[#72a8d0] text-black rounded-md">S'INSCRIRE</button>
            <button className="bg-[#72a8d0] text-black rounded-md">S'INSCRIRE</button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
