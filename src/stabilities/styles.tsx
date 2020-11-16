import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from './utils';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      borderRadius: '2px',
    },
    container: {
      height: '25.5rem',
      width: '100%',
      margin: '1.5rem 1rem 1.5rem 1rem',
      [getMinMediaQuery(1080)]: {
        margin: '2rem 1.5rem 2rem 1.5rem',
      },
    },
    titleMain: {
      fontSize: '1.375rem',
      fontWeight: 500,
      margin: '0',
      marginBottom: '1rem',
      [getMinMediaQuery(1080)]: {
        marginBottom: '1.5rem',
      },
    },
    itemTitle: {
      fontSize: '0.75rem',
      fontWeight: 300,
      margin: '0',
      color: '#777777',
      '& .marginTopPercentage': {
        marginTop: '6%',
      },
      [getMinMediaQuery(400)]: {
        fontSize: '0.875rem',
      },
    },
    amount: {
      fontSize: '1rem',
      fontWeight: 400,
      margin: '0rem 0 0 0rem',
      '& .marginBottom': {
        marginBottom: '2rem',
      },
      [getMinMediaQuery(400)]: {
        fontSize: '1.25rem',
      },
    },
    chartCenter: {
      width: 'height',
      height: '99%',
      margin: '3.3rem 0 0 0',
      position: 'absolute',
      textAlign: 'center',
    },
    amountInChart: {
      fontSize: '1rem',
      fontWeight: 400,
      margin: '0',
      height: '1.65rem',
      '& .inChart': {
        height: '1rem',
        marginLeft: '0rem',
        marginTop: '0rem',
        fontSize: '0.75rem',
        [getMinMediaQuery(400)]: {
          fontSize: '0.875rem',
        },
      },
      [getMinMediaQuery(400)]: {
        fontSize: '1.25rem',
      },
    },
    coinInChart: {
      fontWeight: 400,
      margin: '0',
      height: '1rem',
      marginLeft: '0rem',
      marginTop: '0rem',
      fontSize: '0.75rem',
      // lineHeight: '2rem',
      [getMinMediaQuery(400)]: {
        fontSize: '0.875rem',
      },
    },
    atom: {
      fontSize: '0.875rem',
      fontWeight: 400,
      margin: '0rem 0 0 0.5rem',
    },
    bonded: {
      display: 'block',
      width: '0.25rem',
      height: '2.375rem',
      background: '#FF7846',
      marginTop: '0',
      marginLeft: '7%',
      borderRadius: '8px',
      [getMinMediaQuery(400)]: {
        marginLeft: '15%',
      },

    },
    unbonded: {
      display: 'flex',
      width: '0.25rem',
      height: '2.375rem',
      background: '#FFD800',
      marginTop: '7%',
      marginLeft: '7%',
      borderRadius: '8px',
      [getMinMediaQuery(400)]: {
        marginLeft: '15%',
      },
    },
    line: {
      height: '0.0625rem',
      width: 'auto',
      background: '#E8E8E8',
      margin: '1.5rem 0 1.5rem 0',
    },
    box: {
      display: 'flex',
      width: '100%',
      height: 'auto',
    },
    chartBox: {
      display: 'flex',
      width: '40%',
      height: '100px',
      margin: '0',
      background: 'white',
      [getMinMediaQuery(400)]: {
        height: '160px',
      },
    },
    boxMedium: {
      width: '60%',
      height: '70%',
      margin: 'auto',
      marginLeft: '0',
      [getMinMediaQuery(400)]: {
        marginLeft: '0',
      },
    },
    boxSmall: {
      display: 'flex',
      width: '100%',
      height: '50%',
      margin: '0rem',
    },
    boxSuperSmall: {
      width: '100%',
      height: '50%',
      margin: '0rem 0 0 0.5rem',
      background: 'white',
    },
    boxBottom: {
      display: 'flex',
      width: '100%',
      height: '8.75rem',
      marginLeft: '0rem',
      marginRight: '0',
      [getMinMediaQuery(400)]: {
        marginLeft: '0.625rem',
      },
    },
    boxBottomSmall1: {
      width: '50%',
      height: '8.75rem',
    },
    boxBottomSmall2: {
      height: '8.75rem',
    },
  });

  return {
    classes: useStyles(),
  };
};
