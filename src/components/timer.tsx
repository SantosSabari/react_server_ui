import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  // useEffect with no dependencies - runs after every render
  useEffect(() => {
    console.log('Component rendered or updated');

    return () => {
      console.log('Cleanup before next effect or on component unmount');
    };
  });

  // useEffect with an empty dependencies array - runs only once
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // useEffect with a specific dependency - runs when count changes
  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Timer;
