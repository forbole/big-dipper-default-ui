import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from '../utils';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      height: '100%',
      display: 'flex',
      borderRadius: '6px',
      '& .container': {
        height: 'auto',
        width: '100%',
        padding: '1.5rem 1rem 1.5rem 1rem',
        [getMinMediaQuery(1600)]: {
          padding: '2rem 1.5rem 2rem 1.5rem',
        },
      },
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
      '& .boxHeight': {
        margin: '0',
        width: '50%',
      },
      '& .boxProposer': {
        margin: '0',
      },
      '& .chartContainer': {
        display: 'flex',
        width: '60%',
        height: '45%',
        marginTop: '1.5rem ',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        [getMinMediaQuery(1600)]: {
          marginTop: '2rem',
        },
      },
      '& .chart': {
        width: '100%',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
