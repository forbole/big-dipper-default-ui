import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'green',
      display: 'flex',
      width: '100%',
    },
  });

  return {
    classes: useStyles(),
  };
};
