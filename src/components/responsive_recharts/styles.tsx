import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
    absolute: {
      height: '100%',
      width: '100%',
      position: 'relative',
      top: 0,
      left: 0,
    },
  });

  return {
    classes: useStyles(),
  };
};
