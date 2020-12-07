export const useValidatorListDesktopHook = (callback: any) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (callback) {
      callback();
    }
  };

  return {
    handleSubmit,
  };
};
