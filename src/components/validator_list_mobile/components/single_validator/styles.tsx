import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 0',
      boxSizing: 'border-box',
      '& .content': {
        flex: 1,
        marginLeft: '0.5rem',
        minWidth: 0,
      },
      '& .flex-content': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      '& p': {
        margin: 0,
        minWidth: 0,
        maxWidth: '50%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      '& .content__top-container': {
        marginBottom: '0.5rem',
      },
      '& .content__bottom-container': {
        fontSize: '0.875rem',
      },
      '& .bottom-container__commission': {
        maxWidth: 'none',
      },
      '& .top-container__voting-power': {
        fontWeight: 600,
      },
      '& .bottom-container__status': {
        position: 'relative',
        paddingLeft: '0.7rem',
        '&:before': {
          content: '""',
          width: '5px',
          height: '100%',
          left: '0',
          top: '0',
          background: '#b3b3b3',
          display: 'block',
          position: 'absolute',
          borderRadius: '15px',
        },
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
