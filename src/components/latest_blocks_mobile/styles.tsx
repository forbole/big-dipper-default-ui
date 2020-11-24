import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .single-block': {
        padding: '1rem 0.5rem',
        color: '#414141',
        '&:first-child': {
          borderTop: 'solid #777777 1px',
        },
        borderBottom: 'solid #777777 1px',
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
          color: '#777777',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
