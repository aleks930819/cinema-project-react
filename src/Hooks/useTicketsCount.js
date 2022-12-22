import { useState } from 'react';

const useTicketsCount = (props) => {
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    setTotal(total + props.price);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotal(total - props.price);
    }
  };
  
  return {
    count,
    total,
    increaseCount,
    decreaseCount,
  };
};
export default useTicketsCount;
