export const useValidatorListDesktopHook = (callback: any) => {
  const handleSearchSubmit = (e:any) => {
    e.preventDefault();
    if (callback) {
      callback();
    }
  };

  return {
    handleSearchSubmit,
  };
};
