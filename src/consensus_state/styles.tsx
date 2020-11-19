import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: 'auto',
      display: 'flex',
      borderRadius: '2px',
      overflow: 'auto',
      '& h1': {
        fontSize: '1.375rem',
        fontWeight: 500,
        margin: '0',
        marginBottom: '2rem',
      },
      '& h4': {
        fontSize: '0.875rem',
        fontWeight: 300,
        margin: '0',
        color: '#777777',
      },
      '& .amount': {
        fontSize: '1.25rem',
        fontWeight: 400,
        margin: '0.625rem 0 0 0rem',
      },
      '& .box': {
        display: 'flex',
        background: 'red',
        marginBottom: '2rem',
      },
    },
    container: {
      height: '25.5rem',
      width: '23.75rem',
      margin: 'auto',
    },

    chartCenter: {
      width: '8.75rem',
      height: '2.875rem',
      margin: '3.3rem 0 0 0',
      position: 'absolute',
      textAlign: 'center',
    },
    amountInChart: {
      fontSize: '1.25rem',
      fontWeight: 400,
      margin: '0',
      height: '1.65rem',
    },
    atom: {
      fontSize: '0.875rem',
      fontWeight: 400,
      margin: '0rem 0 0 0.5rem',
    },
    line: {
      height: '0.0625rem',
      width: '23.75rem',
      background: '#E8E8E8',
      margin: '1.5rem 2.53125rem 1.5rem 0',
    },

    boxSmall: {
      // display: 'flex',
      // marginTop: '2rem',
      background: 'blue',
      marginRight: '2rem',
    },
    chartBox: {
      display: 'flex',
      width: '8.75rem',
      height: '8.75rem',
      margin: '0',
    },
    boxMedium: {
      width: '12.375rem',
      height: '8.75rem',
      margin: '0rem',
    },
    boxSuperSmall: {
      width: '15rem',
      height: '2.6875rem',
      margin: '0rem',
    },
    boxBottom: {
      display: 'flex',
      width: '22.438rem',
      height: '8.75rem',
      marginLeft: '0.625rem',
      marginRight: '0.625rem',
    },
    boxBottomSmall1: {
      width: '11rem',
      height: '8.75rem',
    },
    boxBottomSmall2: {
      width: '8rem',
      height: '8.75rem',
    },
  });

  return {
    classes: useStyles(),
  };
};
