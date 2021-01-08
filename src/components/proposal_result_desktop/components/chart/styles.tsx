import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: '100% ',
      display: 'flex',
      borderRadius: '6px',
      overflow: 'auto',
      '& h1': {
        fontSize: '1.125rem',
        fontWeight: 500,
        margin: '0',
        marginBottom: '1rem',
      },
      '& .itemTitle': {
        fontSize: '0.75rem',
        fontWeight: 300,
        margin: '0',
        color: '#777777',
        '& .marginTopPercentage': {
          marginTop: '8%',
        },
      },
      '& .amount': {
        fontSize: '1rem',
        fontWeight: 400,
        margin: '0rem 0 0 0rem',
        overflow: 'auto',
        '& .marginBottom': {
          marginBottom: '2rem',
        },
      },
      '& .amountInChart': {
        fontSize: '1rem',
        fontWeight: 400,
        margin: '0',
        height: '1.65rem',
      },
      '& .inChart': {
        height: '1rem',
        marginLeft: '0rem',
        marginTop: '0rem',
        fontSize: '0.5rem',
      },
      '& .line': {
        height: '0.0625rem',
        width: 'auto',
        background: '#E8E8E8',
        margin: '1.5rem 0 1.5rem 0',
      },
      '& .bonded': {
        display: 'block',
        width: '0.25rem',
        height: '2.375rem',
        marginTop: '0',
        marginLeft: '5%',
        borderRadius: '8px',
        background: '#FF7846',
      },
      '& .unbonded': {
        display: 'flex',
        width: '0.25rem',
        height: '2.375rem',
        marginTop: '7%',
        marginLeft: '5%',
        borderRadius: '8px',
        background: '#FFD800',
      },
      '& .chartBox': {
        display: 'flex',
        width: '45%',
        height: 'auto',
        margin: '0',
      },
      '& .boxMedium': {
        width: '55%',
        height: '70%',
        margin: 'auto',
        marginLeft: '0',
        display: 'flex-end',
      },
      '& .box': {
        display: 'flex',
        width: '100%',
        height: 'auto',
      },
    },
    container: {
      height: 'auto',
      width: '100%',
      margin: '1.5rem 1rem 1.5rem 1rem',
    },
    chartCenter: {
      width: 'height',
      height: '99%',
      margin: '3.3rem 0 0 0',
      position: 'absolute',
      textAlign: 'center',
    },
    coinInChart: {
      fontWeight: 400,
      margin: '0',
      height: '1rem',
      marginLeft: '0rem',
      marginTop: '0rem',
      fontSize: '0.75rem',
    },
    coin: {
      fontSize: '0.5rem',
      fontWeight: 400,
      margin: '0rem 0 0 0.25rem',
    },
    boxSmall: {
      display: 'flex',
      width: '100%',
      maxWidth: '100%',
      overflow: 'auto',
      height: '50%',
      margin: '0rem',
    },
    boxSuperSmall: {
      width: '100%',
      maxWidth: '100%',
      overflow: 'auto',
      height: '50%',
      margin: '0rem 0 0 0rem',
      marginLeft: '5%',
    },
    boxBottom: {
      display: 'flex',
      width: '100%',
      height: '30%',
      marginLeft: '0rem',
      marginRight: '0',
    },
    boxBottomSmall1: {
      width: '45%',
      marginRight: '0.5rem',
    },
  });

  return {
    classes: useStyles(),
  };
};
