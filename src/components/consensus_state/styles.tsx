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
      '& h1': {
        fontSize: '1.375rem',
        fontWeight: 500,
        margin: '0 0 2rem 0',
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
        margin: '0.625rem 0 0 0',
      },
      '& .proposer': {
        display: 'flex',
        marginTop: '0.625rem',
      },
      '& .box': {
        display: 'flex',
        marginBottom: '2rem',
      },
      '& .amountInChart': {
        fontSize: '1.5rem',
        fontWeight: 400,
        margin: '0',
        height: '1.65rem',
      },
      '& .inChart': {
        height: '1rem',
        marginLeft: '0',
        marginTop: '0',
        fontSize: '0.75rem',
        color: '#414141',
        fontWeight: 300,
      },
      '& .boxSmall1': {
        marginRight: '2rem',
        margin: '0',
      },
      '& .boxSmall2': {
        margin: '0',
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
    chartBox: {
      display: 'flex',
      width: '60%',
      height: '45%',
      marginTop: '1.5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      [getMinMediaQuery(1600)]: {
        marginTop: '2rem',
      },
    },
    boxFlexible: {
      width: '100%',
      height: '100%',
      position: 'relative',
      marginTop: '0',
    },
  });

  return {
    classes: useStyles(),
  };
};
