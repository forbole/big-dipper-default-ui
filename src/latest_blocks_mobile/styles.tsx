import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .single-block': {
        padding: '1rem',
        '&:first-child': {
          borderTop: 'solid black 1px',
        },
        borderBottom: 'solid black 1px',
        '& .flex': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '& p': {
          margin: 0,
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
