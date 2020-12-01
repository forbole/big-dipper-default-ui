import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      padding: '1rem',
      borderRadius: '6px',
      background: 'white',
      '& .top-bar': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '1rem',
        '& h3': {
          fontSize: '1.125rem',
          margin: 0,
          fontWeight: 500,
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
