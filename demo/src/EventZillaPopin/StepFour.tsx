import page from '@app/page';
import { Close } from '@components/icons/Close';
import React from 'react';
import StatusTrack from './StatusTrack';

type StepFourProps = {
  currentStep: number;
  completedSteps: number[];
};

const StepFour = ({ currentStep, completedSteps }: StepFourProps) => {
  return (
    <div className="flex">
      <div className="h-[650px] w-[550px]  bg-white shadow-lg">
        <div className="flex justify-between mx-[30px] mt-6">
          <h1>CONFIRMATION</h1>
          <Close width={15} height={15} />
        </div>
        <div className="mt-8">
          <StatusTrack currentStep={currentStep} completedSteps={completedSteps} />
        </div>
        <div className="mt-10">
          <img src="/assets/Rectangle.jpg" />
        </div>
        <span className="text-center block mt-4 text-[24px]">BRAVO!</span>
        <p className='text-center mx-[30px] mt-4'>
          Votre inscription a bien ete enregistree. Un mail de confirmation va vous etre envoye dans quelques minutes
        </p>
      </div>
    </div>
  );
};

export default StepFour;
