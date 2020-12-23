import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'rgba(255, 255, 255, 0.75)',
      padding: '1rem',
      borderRadius: '2px',
      boxSizing: 'border-box',
      '& p': {
        margin: '0',
        color: 'black',
      },
      '& .single__label': {
        textAlign: 'left',
      },
      '& .single__value': {
        textAlign: 'right',
      },
      '& .tool-top__single': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
