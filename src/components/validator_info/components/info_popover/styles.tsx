import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    popover: {
      pointerEvents: 'none',
      '& .popover__container': {
        padding: '1rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
