export const useAddressHook = ({ copyCallback }: any) => {
  const handleCopyClick = (value: string) => {
    if (copyCallback) {
      copyCallback(value);
    }
  };

  return {
    handleCopyClick,
  };
};
