import { useState } from 'react';

export const useSignatureHook = () => {
  const [isAsc, setIsAsc] = useState(true);

  const handleChange = () => {
    setIsAsc(!isAsc);
  };

  return {
    isAsc,
    handleChange,
  };
};
