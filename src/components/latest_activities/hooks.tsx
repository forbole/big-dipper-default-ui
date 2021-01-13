export const useLatestActivitiesHook = (onClick?: (hash:string | number) => void) => {
  const handleOnClick = (hash:string | number) => {
    if (onClick) {
      onClick(hash);
    }
  };

  return {
    handleOnClick,
  };
};
