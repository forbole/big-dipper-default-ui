import { makeStyles } from '@material-ui/styles';

export const useGetStyles = (props: any) => {
  const useStyles = makeStyles({
    root: {
      '& .overrideLabel': {
        display: props.votingPowerOverride.rawValue ? 'inherit' : 'none',
        marginRight: '0.3rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
