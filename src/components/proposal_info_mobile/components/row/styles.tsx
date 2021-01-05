import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'white',
      overflow: 'auto',
      '& .table': {
        borderBottom: '1px solid #E8E8E8',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
