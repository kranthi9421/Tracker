import { Close } from '@components/icons/Close';
import StatusTrack from './StatusTrack';
import Input from '../Input/Input';
import { ArrowRightFilled } from '@components/icons/ArrowRightFilled';
import Button from '../Buttons/Button';

type StepThreeProps = {
  next: any;
  back : any;
  currentStep: number;
  completedSteps : number[]
};

const StepThree = ({ next, currentStep,completedSteps,back }: StepThreeProps) => {
  return (
    <div className="flex">
      <div className="h-[700px] w-[600px]  bg-white shadow-lg">
        <div className="flex justify-between mx-[30px] mt-6">
          <h1>VOS CORDONNEES</h1>
          <Close width={15} height={15} />
        </div>
        <div className="mt-8">
          <StatusTrack currentStep={currentStep} completedSteps={completedSteps} />
        </div>
        <div className="flex flex-col gap-3 mx-[30px] mt-8">
          <span>
            Date : Lundi 4 <span>Mars</span>14:00-16:00
          </span>
          <span>Nombre de partcipants : 1</span>
          <span>Quelles sont vos coordonnees?</span>
        </div>
        <div className="flex flex-col gap-3 mx-[30px] mt-5">
          <Input type="text" className="w-[70%]" />
          <Input type="text" className="w-[70%]" />
          <Input type="text" className="w-[70%]" />
        </div>
        <div className="mt-5 flex gap-2 mx-[30px]">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <label className="">Je veux recevior les derniers actualities, evenemts et bons plans de Val d'Europe</label>
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
        <p className="mx-[30px] mt-5">
          En validant ce formulair,j'accepte les <span className="text-[#72a8d0]">CPU</span>
          et la <span className="text-[#72a8d0]">politique de confidentialite </span> de notre partenaire Eventzilla
          ainsi que les <span className="text-[#72a8d0]">CPU</span>
          et la <span className="text-[#72a8d0]">politique de confidentialite </span>
          de Klepierre.
        </p>
      </div>
    </div>
  );
};

export default StepThree;
