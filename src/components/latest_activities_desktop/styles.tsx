import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& tr': {
        '&.single-activity:last-child': {
          '& .MuiTableCell-root': {
            borderBottom: 'none',
          },
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
