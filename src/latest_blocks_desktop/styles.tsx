import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      overflow: 'auto',
      '& .label': {
        borderBottom: 'none',
        fontWeight: 500,
      },
      '& .cell': {
        borderBottom: 'none',
        '&.hash': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          maxWidth: '120px',
        },
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
