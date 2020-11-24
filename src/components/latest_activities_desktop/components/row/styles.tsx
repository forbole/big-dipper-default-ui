import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      verticalAlign: 'baseline',
      '& > *': {
        borderBottom: 'unset',
        whiteSpace: 'nowrap',
      },
      '& .content': {
        width: '100%',
        whiteSpace: 'normal',
      },
      '& .collapsible': {
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
