import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      background: 'skyblue',
    },
  }));

  return {
    classes: useStyles(),
  };
};
