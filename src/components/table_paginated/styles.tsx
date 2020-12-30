import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .table-paginated': {
        background: 'white',
      },
      '& .table__label': {
        borderBottom: 'none',
        fontWeight: 500,
      },
      '& .table__cell': {
        borderBottom: 'none',
      },
      '& .table__row': {
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
