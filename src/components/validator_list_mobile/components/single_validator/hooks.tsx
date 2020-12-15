import { Data } from '../../types';

export const useSingleValidatorHook = (callback:any, data:Data) => {
  const handleOnClick = () => {
    if (callback) {
      callback(data);
    }
  };
  return {
    handleOnClick,
  };
};
