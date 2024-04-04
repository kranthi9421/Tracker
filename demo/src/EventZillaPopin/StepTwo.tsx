import { Close } from '@components/icons/Close';
import Input from '../Input/Input';

import Button from '../Buttons/Button';
import { ArrowRightFilled } from '@components/icons/ArrowRightFilled';
import StatusTrack from './StatusTrack';

type StepTwoProps = {
  next: any;
  back : any;
  currentStep: number;
  completedSteps : number[]
};

const StepTwo = ({ next, currentStep,completedSteps,back }: StepTwoProps) => {
  return (
    <div className="flex">
      <div className="h-[400px] w-[600px]  bg-white shadow-lg">
        <div className="flex justify-between mx-[30px] mt-6">
          <h1>NOMRIDIN PARTICIPANTS</h1>
          <Close width={15} height={15} />
        </div>
        <div className="mt-5">
          <StatusTrack currentStep={currentStep} completedSteps={completedSteps} />
        </div>

        <div className="mt-10 flex flex-col gap-4 mx-[30px]">
          <span>
            Date : Lundi 4 <span className="text-[#72a8d0]">MARS</span> 14:00 - 16:00
          </span>
          <span>Combien de personnes participironet?</span>
        </div>
        <div className="flex gap-3 items-center mx-[30px] mt-6">
          <label>Nomridine participants : </label>
          <Input type="text" value="1" className="w-20 pl-8" />
        </div>
        <div className="flex mt-10 justify-between mx-[50px]">
          <Button onClick={back} variant="third" label="RETOUR" className="bg-gray-500" />
          <Button
            variant="third"
            onClick={next}
            label="VALIDER"
            start={<ArrowRightFilled width={10} height={10} />}
            className="third_btn"
          />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
