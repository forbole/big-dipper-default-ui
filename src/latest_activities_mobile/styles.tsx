import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .activity': {
        padding: '1rem 0.5rem',
        '&:first-child': {
          borderTop: 'solid #777777 1px',
        },
        borderBottom: 'solid #777777 1px',
      },
      '& .content-container': {
        flex: 1,
        padding: '0 0.5rem',
      },
      '& .content-footer': {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem',
      },

      '& .flex': {
        display: 'flex',
      },

      '& .type': {
        position: 'relative',
        paddingLeft: '0.7rem',
        '&:before': {
          content: '""',
          width: '5px',
          height: '100%',
          left: '0',
          background: '#b3b3b3',
          display: 'block',
          position: 'absolute',
          borderRadius: '15px',
        },
      },

      '& .success': {
        fill: '#15CF74',
      },
      '& .fail': {
        fill: '#FF3A44',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
