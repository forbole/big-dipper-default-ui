import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .validator-list-mobile': {
        borderBottom: '1px solid #E8E8E8',
        '&:first-child': {
          borderTop: '1px solid #E8E8E8',
        },
        '&:last-child': {
          border: 'none',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
