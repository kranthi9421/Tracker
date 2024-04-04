import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const EventZillaPopin = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [completedSteps, setCompletedSteps] = useState([]);

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setCompletedSteps([...completedSteps, currentStep]);
  };

  const pageDisplay = () => {
    if (currentStep === 0) {
      return (
        <>
          <StepOne next={handleNext} currentStep={currentStep} completedSteps={completedSteps} />
        </>
      );
    } else if (currentStep === 1) {
      return (
        <>
          <StepTwo next={handleNext} back={handleBack} currentStep={currentStep} completedSteps={completedSteps} />
        </>
      );
    } else if (currentStep === 2) {
      return (
        <>
          <StepThree next={handleNext} back={handleBack} currentStep={currentStep} completedSteps={completedSteps} />
        </>
      );
    } else {
      return <StepFour currentStep={currentStep} completedSteps={completedSteps} />;
    }
  };

  return <div>{pageDisplay()}</div>;
};

export default EventZillaPopin;
