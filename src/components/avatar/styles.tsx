import { makeStyles } from '@material-ui/styles';
import { UseGetStylesProps } from './types';

export const useGetStyles = ({
  width = '50px', height = '50px',
}: UseGetStylesProps) => {
  const useStyles = makeStyles({
    root: {
      '&.avatar': {
        width,
        height,
        minWidth: width,
        borderRadius: '50%',
        overflow: 'hidden',
      },
      '& img': {
        maxWidth: '100%',
        height: 'auto',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
