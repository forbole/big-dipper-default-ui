import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      margin: 0,
      paddingLeft: '0.3rem',
      '& .share-icon': {
        width: '16px',
        height: '16px',
      },
      '& .dialog': {
        padding: '5rem',

      },
      '& .closeIcon': {
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        color: 'grey',
      },
      '& .dialogTitle': {
        paddingTop: '1rem',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 300,
      },
      '& .button': {
        // width: '95%',
        margin: '1rem',
        height: '2.5rem',
        color: '#FFFFFF',
        fontSize: '1rem',
        borderRadius: '6px',
        border: 'none',
        background: '#FD3B4C',
      },
      '& .socialMedia': {
        margin: '1rem',
      },
      '& .qr-code': {
        margin: '0 auto',
        height: '12rem',
        width: '12rem',
      },
      '& .place-holder': {
        height: '12rem',
        width: '12rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
