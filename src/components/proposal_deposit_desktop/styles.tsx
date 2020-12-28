import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
      '& .MuiTableCell-head': {
        fontSize: '1rem',
      },
      '& .cell': {
        borderBottom: 'none',
      },
      '& h1': {
        fontSize: '1.5rem',
        margin: '0',
        marginBottom: '1.5rem',
        fontWeight: 400,
      },
      '& .table': {
      },
      '& .arrowRight': {
        paddingTop: '0.2rem',
        justifyContent: 'flex-end',
        height: '1rem',
        width: '1rem',
      },
      '& .tableRow': {
        '&:nth-of-type(odd)': {
          background: '#F8F8F8',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
