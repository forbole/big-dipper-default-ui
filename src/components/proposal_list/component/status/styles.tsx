import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      width: '100px',
      height: '30px',
      display: 'flex',
      '& .type': {
        marginTop: '8px',
        width: '4px',
        height: '0.75rem',
        borderRadius: '8px',
      },
      '& .Rejected': {
        background: '#FD3B4C',
      },
      '& .Passed': {
        background: '#1EC490',
      },
      '& .Removed': {
        background: '#FEA729',
      },
      '& .content': {
        marginTop: '4px',
        fontSize: '0.875rem',
        marginLeft: '0.4rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
