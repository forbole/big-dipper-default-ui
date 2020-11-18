import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      padding: '1rem',
    },
  });

  return {
    classes: useStyles(),
  };
};
