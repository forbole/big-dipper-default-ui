import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from './utils';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: '100%',
      display: 'flex',
      borderRadius: '2px',
      overflow: 'auto',
      // background: 'yellow',
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
        fontSize: '1rem',
        fontWeight: 400,
        margin: '0.625rem 0 0 0rem',
      },
      '& .proposer': {
        display: 'flex',
        fontSize: '1rem',
        fontWeight: 400,
        margin: '0.625rem 0 0 0rem',
        color: '#1D86FF',
      },
      '& .box': {
        display: 'flex',
        // background: 'red',
        marginBottom: '2rem',
      },
      '& .icon': {
        width: '1.5rem',
        height: '1.5rem',
        marginRight: '0.3rem',
      },
      '& .amountInChart': {
        fontSize: '1.5rem',
        fontWeight: 400,
        margin: '0',
        height: '1.65rem',
        [getMinMediaQuery(1600)]: {
          // fontSize: '1.25rem',
        },
      },
      '& .inChart': {
        height: '1rem',
        marginLeft: '0rem',
        marginTop: '0rem',
        fontSize: '0.5rem',
        color: '#414141',
        [getMinMediaQuery(1600)]: {
          // fontSize: '0.875rem',
        },
      },
    },
    container: {
      height: 'auto',
      width: '100%',
      margin: '1.5rem 1rem 1.5rem 1rem',
      [getMinMediaQuery(1600)]: {
        margin: '2rem 1.5rem 2rem 1.5rem',
      },
    },
    boxSmall: {
      // background: 'blue',
      marginRight: '2rem',
      margin: '0',
    },
    chartBox: {
      display: 'flex',
      width: '60%',
      height: '45%',
      // background: 'red',
      marginTop: '2rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      // [getMinMediaQuery(1080)]: {
      //   width: '40%',
      // },
      // [getMinMediaQuery(1600)]: {
      //   width: '50%',
      //   height: '150px',
      // },
    },
  });

  return {
    classes: useStyles(),
  };
};
