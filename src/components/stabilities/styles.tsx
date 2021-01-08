import { makeStyles } from '@material-ui/styles';
import { getMinMediaQuery } from '../../utils';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: '100% ',
      display: 'flex',
      borderRadius: '6px',
      overflow: 'auto',
      '& .boxBottom': {
        marginTop: '1rem',
      },
      '& h1': {
        fontSize: '1.125rem',
        fontWeight: 500,
        margin: '0',
        marginBottom: '1rem',
        [getMinMediaQuery(769)]: {
          fontSize: '1.375rem',
        },
        [getMinMediaQuery(1600)]: {
          marginBottom: '1.5rem',
        },
        [getMinMediaQuery(1080)]: {
          marginBottom: '2rem',
        },
      },
      '& .itemTitle': {
        fontSize: '0.75rem',
        fontWeight: 300,
        margin: '0',
        color: '#777777',
        [getMinMediaQuery(1600)]: {
          fontSize: '0.875rem',
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
        [getMinMediaQuery(1600)]: {
          fontSize: '1.25rem',
        },
      },
      '& .amountInChart': {
        fontSize: '1rem',
        fontWeight: 400,
        margin: '0',
        height: '1.65rem',
        [getMinMediaQuery(1600)]: {
          fontSize: '1.25rem',
        },
      },
      '& .inChart': {
        height: '1rem',
        marginLeft: '0rem',
        marginTop: '0rem',
        fontSize: '0.5rem',
        [getMinMediaQuery(1600)]: {
          fontSize: '0.875rem',
        },
      },
      '& .line': {
        height: '0.0625rem',
        width: 'auto',
        background: '#E8E8E8',
        margin: '1.5rem 0 1.5rem 0',
        [getMinMediaQuery(1600)]: {
          marginBottom: '2rem',
        },
      },
      '& .chartBox': {
        display: 'flex',
        width: '45%',
        height: 'auto',
        margin: '0',
        [getMinMediaQuery(1200)]: {
          width: '50%',
          height: '10rem',
        },
      },
      '& .boxMedium': {
        width: '55%',
        height: '70%',
        margin: 'auto',
        marginLeft: '0',
        display: 'flex-end',
        [getMinMediaQuery(1080)]: {
          width: '60%',
        },
      },
      '& .box': {
        display: 'flex',
        width: '100%',
        height: 'auto',
      },
      '& .boxSmallTop': {
        width: '100%',
        maxWidth: '100%',
        overflow: 'auto',
        height: '50%',
        margin: '0rem 0 0 0rem',
        marginLeft: '5%',
        position: 'relative',
        paddingLeft: '0.7rem',
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
        wordWrap: 'break-word',
        '&:before': {
          content: '""',
          width: '5px',
          height: '100%',
          left: '0',
          top: '0',
          background: '#FF7846',
          display: 'block',
          position: 'absolute',
          borderRadius: '15px',
        },
      },
      '& .boxSmallBottom': {
        width: '100%',
        maxWidth: '100%',
        overflow: 'auto',
        height: '50%',
        margin: '1rem 0 0 0rem',
        marginLeft: '5%',
        position: 'relative',
        paddingLeft: '0.7rem',
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
        wordWrap: 'break-word',
        '&:before': {
          content: '""',
          width: '5px',
          height: '100%',
          left: '0',
          top: '0',
          background: '#FFD800',
          display: 'block',
          position: 'absolute',
          borderRadius: '15px',
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
      [getMinMediaQuery(1600)]: {
        fontSize: '0.875rem',
      },
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
    boxBottom: {
      display: 'flex',
      width: '100%',
      height: '30%',
      marginLeft: '0rem',
      marginRight: '0',
      [getMinMediaQuery(1600)]: {
        marginLeft: '0.625rem',
      },
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
