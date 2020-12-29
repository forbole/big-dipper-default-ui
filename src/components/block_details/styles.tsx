import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .cell': {
        borderBottom: 'none',
      },
      '& h1': {
        fontSize: '1.5rem',
        margin: '0',
        fontWeight: 400,
      },
      '& .table': {
        '& tr': {
          borderBottom: '1px solid #E8E8E8',
          '&:last-child': {
            borderBottom: 'none',
          },
        },
      },
      '& .arrowRight': {
        paddingTop: '0.2rem',
        justifyContent: 'flex-end',
        height: '1rem',
        width: '1rem',
      },
      '& .signatureContent': {
        flex: 1,
        justifyContent: 'flex-end',
        display: 'flex',
      },
      '& .signatureValue': {
        flex: 1,
        display: 'flex',
      },
      '& .value': {
        display: 'flex',
      },
      '& .signatures': {
        cursor: 'pointer',
      },
      '&.dialog': {
        backgroundColor: 'transparent',
      },
      '& .signatureTable': {
        borderBottom: 'none',
        width: 'auto',
        overflow: 'auto',
        margin: '1rem 1.5rem 2.5rem 1.5rem',
      },
      '& .MuiTableCell-root': {
        borderBottom: 'none',
        display: 'table-cell',
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
      '& .title': {
        width: 'auto',
      },
      '& .MuiTableCell-root': {
        display: 'table-cell',
      },
    },
    mobile: {
      '& .MuiTableCell-root': {
        display: 'block',
        padding: '0.3rem 0 0.1rem 0',
      },
      '& .displayTitle': {
        borderBottom: 'none',
        marginTop: '0.7rem',
      },
      '& .value': {
        paddingBottom: '0.7rem',
        display: 'flex',
      },
      '& .title': {
        display: 'none',
      },
      '& .signatureContent': {
        flex: 1,
        justifyContent: 'flex-end',
        display: 'flex',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
