import { makeStyles } from '@material-ui/styles';
import { UseGetStylesProps } from './types';

export const useGetStyles = ({
  width = '1.5rem', height = '1.5rem',
}: UseGetStylesProps) => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      '& img': {
        height,
        width,
        borderRadius: '50%',
        overflow: 'hidden',
        marginRight: '0.3rem',
      },
      '& div': {
        fontSize: '1rem',
        fontWeight: 400,
        margin: '0',
        color: '#1D86FF',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
