import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'pink',
    },
  });

  return {
    classes: useStyles(),
  };
};
