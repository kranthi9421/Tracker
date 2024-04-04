import UserFriend from '@components/icons/UserFriend';
import CalenderAlt from '@components/icons/CalenderAlt';
import CalenderCheck from '@components/icons/CalenderCheck';
import PenAlt from '@components/icons/PenAlt';
import './StatusTrack.css';

type Props = {
  currentStep: number;
  completedSteps: number[];
};

const StatusTrack = ({ currentStep, completedSteps }: Props) => {
  const steps = [
    {
      id: 1,
      img: <CalenderAlt width={20} height={20} />,
    },
    {
      id: 2,
      img: <UserFriend width={20} height={20} />,
    },
    {
      id: 3,
      img: <PenAlt width={20} height={20} />,
    },
    {
      id: 4,
      img: <CalenderCheck width={20} height={20} />,
    },
  ];
  return (
    <div className="progress-bar">
      <ul>
        {steps.map((step, index) => (
          <li
            key={index}
            className={index === currentStep ? 'active' : completedSteps.includes(index) ? 'active completed' : ''}
          >
            <span>
               {step.img}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusTrack;
