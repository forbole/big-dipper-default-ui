import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
      '& .container': {

        display: 'flex',
        marginBottom: '0.5rem',
      },
      '& .mainContainer': {
        marginTop: '0.625rem',
      },
      '& .line': {
        height: '1px',
        margin: '1rem 0 1rem 0',
        width: '100%',
        background: '#E8E8E8',
      },
      '& .amount': {
        flex: 1,
        justifyContent: 'flex-end',
        display: 'flex',
      },
      '& h1': {
        fontSize: '1.375rem',
        fontWeight: 400,
      },

    },
  });

  return {
    classes: useStyles(),
  };
};
