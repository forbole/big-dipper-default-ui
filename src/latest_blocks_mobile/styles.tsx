import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .single-block': {
        padding: '1rem 0.5rem',
        '&:first-child': {
          borderTop: 'solid #F8F8F8 1px',
        },
        borderBottom: 'solid #F8F8F8 1px',
        '& .flex': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '& p': {
          margin: '0 0 0.3rem 0',
        },
        '& .time': {
          fontSize: '0.875rem',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
