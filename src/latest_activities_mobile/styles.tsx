import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      boxSizing: 'border-box',
      '& .activity': {
        padding: '1rem 0.5rem',
        '&:first-child': {
          borderTop: 'solid #777777 1px',
        },
        borderBottom: 'solid #777777 1px',
      },
      '& .content-container': {
        flex: 1,
        minWidth: '0',
        padding: '0 0.5rem',
      },
      '& .content': {
        fontSize: '1rem',
      },
      '& .content-footer': {
        display: 'flex',
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
        fontSize: '0.875rem',
        minWidth: '0',
        flex: 1,
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
      '& .time': {
        fontSize: '0.875rem',
        margin: '0',
      },
      '& .icon': {
        marginLeft: '0.5rem',
        fontSize: '20px',
      },
      '& .success': {
        fill: '#15CF74',
      },
      '& .fail': {
        fill: '#FF3A44',
      },
      '& .overflow': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
