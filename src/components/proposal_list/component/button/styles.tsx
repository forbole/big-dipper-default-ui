import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      // '& .button': {
      width: '100px',
      height: '30px',
      position: 'absolute',
      right: '40px',
      color: '#FFFFFF',
      fontSize: '0.875rem',
      borderRadius: '6px',
      border: 'none',
      // },

      '& .Vote': {
        background: '#FD3B4C',
      },
      '& .Deposit': {
        background: '#FD7522',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
