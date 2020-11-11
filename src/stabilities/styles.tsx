import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from './utils';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      // height: '21.563rem',
      // width: '22.438rem',
      // boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      display: 'flex',
      borderRadius: '2px',
      background: 'red',
    },
    container: {
      height: '25.5rem',
      // width: '23.75rem',
      width: '100%',
      margin: '1.5rem 1rem 1.5rem 1rem',
      // marginTop: '2rem',
      background: 'blue',
      [getMinMediaQuery(1080)]: {
        margin: '2rem 1.5rem 2rem 1.5rem',
      },
    },
    titleMain: {
      fontSize: '1.375rem',
      fontWeight: 500,
      margin: '0',
      marginBottom: '2rem',
    },
    itemTitle: {
      fontSize: '0.875rem',
      fontWeight: 300,
      margin: '0.9375rem 0 0 0rem',
      color: '#777777',
    },
    amount: {
      fontSize: '1.25rem',
      fontWeight: 400,
      margin: '0rem 0 0 0rem',
      '& .marginBottom': {
        marginBottom: '2rem',
      },
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
      '& .inChart': {
        height: '1rem',
        marginLeft: '0rem',
        marginTop: '0rem',
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
      marginTop: '1.125rem',
      marginLeft: '2rem',
      borderRadius: '1px',

    },
    unbonded: {
      display: 'flex',
      width: '0.25rem',
      height: '2.375rem',
      background: '#FFD800',
      marginTop: '1.125rem',
      marginLeft: '2rem',
      borderRadius: '16px',
    },
    line: {
      height: '0.0625rem',
      width: 'auto',
      background: '#E8E8E8',
      // margin: '1.5rem 2.53125rem 1.5rem 0',
      margin: '1.5rem 0 1.5rem 0',
    },
    box: {
      display: 'flex',
      // width: '22.375rem',
      width: 'auto',
      // height: '8.75rem',
      height: 'auto',
    },
    chartBox: {
      display: 'flex',
      width: '6.75rem',
      height: '6.75rem',
      [getMinMediaQuery(1080)]: {
        width: '8.75rem',
        height: '8.75rem',
      },
      margin: '0',
    },
    boxMedium: {
      width: '12.375rem',
      height: '8.75rem',
      margin: '0rem',
    },
    boxSmall: {
      display: 'flex',
      // width: '15rem',
      width: 'auto',
      height: '4.375rem',
      margin: '0rem',
    },
    boxSuperSmall: {
      // width: '15rem',
      width: 'auto',
      height: '2.6875rem',
      margin: '0rem 0 0 0.5rem',
    },
    boxBottom: {
      display: 'flex',
      // width: '22.438rem',
      width: 'auto',
      height: '8.75rem',
      marginLeft: '0.625rem',
      // marginRight: '0.625rem',
      marginRight: '0',
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
