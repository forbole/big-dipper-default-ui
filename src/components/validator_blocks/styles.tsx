import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      // height: '100px',
    },
  });

  return {
    classes: useStyles(),
  };
};
