import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .signatureTable': {
        borderBottom: 'none',
        width: 'auto',
        overflow: 'auto',
      },
      '& .MuiTableCell-root': {
        borderBottom: 'none',
      },
      '& .tableHead': {
        background: '#F8F8F8',
      },
      '& .tableRow': {
        '&:nth-of-type(even)': {
          background: '#F8F8F8',
        },
      },
      '& .arrowIcon': {
        width: '1rem',
        height: '1rem',
        marginLeft: '0.3rem',
        verticalAlign: 'text-bottom',
      },
      '& .closeIcon': {
        position: 'absolute',
        right: '1rem',
        top: '1.2rem',
        color: 'grey',
      },
      '& .dialogTitle': {
        paddingTop: '1rem',
        textAlign: 'center',
      },
    },
    desktop: {
      '& .signatureTable': {
        margin: '1rem 2.5rem 2.5rem 2.5rem',
      },
      '& .closeIcon': {
        right: '1.5rem',
      },
    },
    mobile: {
      '& .signatureTable': {
        margin: '0.5rem 1.5rem 1.5rem 1.5rem',
      },
      '& .closeIcon': {
        right: '1rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
