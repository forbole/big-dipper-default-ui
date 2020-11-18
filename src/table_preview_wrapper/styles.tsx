import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      padding: '1rem',
      borderRadius: '6px',
      '& .top-bar': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '1rem',
        '& h3': {
          fontSize: '1.1125rem',
          margin: 0,
          fontWeight: 600,
        },
      },
      '& .footer-action': {
        paddingTop: '1rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
