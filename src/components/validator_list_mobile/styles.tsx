import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'pink',
      '& .validator-list-mobile': {
        borderBottom: '1px solid #E8E8E8',
        '&:first-child': {
          borderTop: '1px solid #E8E8E8',
        },
        '&:last-child': {
          border: 'none',
        },
      },
      '& .validator-list-mobile__data-container': {
        padding: '1rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
