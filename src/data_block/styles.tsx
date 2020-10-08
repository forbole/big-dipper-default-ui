import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      background: theme?.palette?.primary?.main,
      color: 'white',
      borderRadius: '6px',
      '& .header': {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        '& .label, & .duration': {
          margin: '0',
          fontWeight: '300',
          fontSize: '0.875rem',
        },
      },
      '& h1': {
        margin: '0',
        fontWeight: '400',
        fontSize: '2.2rem',
      },
    },
    select: {
      color: 'inherit',
      padding: '0',
      '& div': {
        padding: '0',
        fontSize: '0.875rem',
        fontWeight: '300',
      },
      '& svg': {
        color: 'white',
      },
      '&:before': {
        content: 'none',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
