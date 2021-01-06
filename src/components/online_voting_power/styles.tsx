import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '&.online-voting-power': {
        height: '100%',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
