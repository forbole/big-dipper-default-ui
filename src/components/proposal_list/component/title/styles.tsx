import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .title': {
        fontSize: '1.25rem',
        fontWeight: 400,
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
