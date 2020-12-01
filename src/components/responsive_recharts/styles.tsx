import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
  });

  return {
    classes: useStyles(),
  };
};
