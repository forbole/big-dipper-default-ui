import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
    },
  });

  return {
    classes: useStyles(),
  };
};
