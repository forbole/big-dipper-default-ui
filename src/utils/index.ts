import { getAllyProps } from './get_ally_props';

export const getMinMediaQuery = (breakpoint: string | number) => {
  return `@media (min-width: ${breakpoint}px)`;
};

export {
  getAllyProps,
};
