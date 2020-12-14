import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      display: 'inline-flex'
    },
    popover: {
      pointerEvents: 'none',
      '& .popover__container': {
        padding: '1rem',
        maxWidth: '300px',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
