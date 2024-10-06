import React, { useEffect, useState } from 'react';
import debounceMethod from './components/debounce';
import throttleMethod from './components/throttle';

const App = () => {
  const [normalCount, setNormalCount] = useState<number>(0);
  const [debounceCount, setDebounceCount] = useState<number>(0);
  const [throttleCount, setThrottleCount] = useState<number>(0);

  const normalMethod = () => {
    setNormalCount((prev) => prev + 1);
  };

  const handleScroll = () => {
    normalMethod();
    debounceMethod(setDebounceCount);
    throttleMethod(setThrottleCount);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-[900vh] bg-gray-100 flex justify-center">
      <Component
        normalCount={normalCount}
        debounceCount={debounceCount}
        throttleCount={throttleCount}
      />
    </div>
  );
};

interface ComponentProps {
  normalCount: number;
  debounceCount: number;
  throttleCount: number;
}

const Component = ({ normalCount, debounceCount, throttleCount }:ComponentProps) => {
  return (
    <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-96 top-10 sticky bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
      <h1 className="text-center text-cyan-500 font-bold text-2xl md:text-3xl lg:text-4xl pt-4 mb-8">
        Practical Demo of Debouncing and Throttling Compared to Normal Method
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-green-600 text-lg md:text-xl lg:text-2xl font-bold">
          Normal method: {normalCount}
        </p>
        <p className="text-green-600 text-lg md:text-xl lg:text-2xl font-bold">
          Debouncing: {debounceCount}
        </p>
        <p className="text-green-600 text-lg md:text-xl lg:text-2xl font-bold">
          Throttling: {throttleCount}
        </p>
      </div>
    </div>
  );
};

export default App;