import LinearBar from './LinearBar';
import { useEffect, useState } from 'react';
const Skills = () => {

  const [mernSc, setMernSc] = useState(0);
  const [reactSc, setReacSc] = useState(0);
  const [backendSc, setBackendSc] = useState(0);
  const [restapiSc, setRestapiSc] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (mernSc < 100) {
        setMernSc((prevCount) => prevCount + 1);
      }
      if (backendSc < 100) {
        setBackendSc((prevCount) => prevCount + 1);
      }
      if (reactSc < 88) {
        setReacSc((prevCount) => prevCount + 1);
      }
      if (restapiSc < 100) {
        setRestapiSc((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [mernSc, reactSc, backendSc]);


  return (
    <div className='flex flex-col space-y-1 pt-6'>
      <div className='flex flex-col gap-y-4'>
        <span className='text-Snow text-xs font-bold bg-gradient-to-bl'>Experties and Competencies</span>
        <div className='flex flex-col space-y-2'>
          <LinearBar title={'MERN Stack Development'} percent={`${mernSc}%`} bgColor='bg-Green' />;
          <LinearBar title={'Backend Development'} percent={`${backendSc}%`} bgColor='bg-Green' />;
          <LinearBar title={'Frontend Devdlopment'} percent={`${reactSc}%`} bgColor='bg-Green' />;
          <LinearBar title={`Rest API's`} percent={`${restapiSc}%`} bgColor='bg-Green' />;
        </div>
      </div>
    </div>
  );
};

export default Skills;
