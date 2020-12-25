import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .label': {
        borderBottom: 'none',
        fontWeight: 500,
      },
      '& .cell': {
        borderBottom: 'none',
      },
      '& .single-row': {
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
