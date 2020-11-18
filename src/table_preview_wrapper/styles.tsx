import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      padding: '1rem',
      '& .top-bar': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& h3': {
          fontSize: '1.1125rem',
          margin: 0,
          fontWeight: 600,
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
