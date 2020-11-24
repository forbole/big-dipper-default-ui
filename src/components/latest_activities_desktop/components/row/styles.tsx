import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      verticalAlign: 'baseline',
      '&.single-activity': {
        transition: '0.3s',
        '&.active': {
          background: '#F6F7F9',
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
            top: '0',
            background: '#b3b3b3',
            display: 'block',
            position: 'absolute',
            borderRadius: '15px',
          },
        },
        '& .hide': {
          visibility: 'hidden',
        },
      },
    },
    collapsible: {
      background: '#F6F7F9',
      '&.collapsible': {
        '& tr': {
          verticalAlign: 'baseline',
        },
        '& .collapsible-cell': {
          padding: '0',
        },
        '& .label': {
        },
        '& .value': {
          width: '100%',
          whiteSpace: 'normal',
        },
        '& .padding': {
          padding: '1rem 0',
        },
      },
    },
    table: {
      '& .MuiTableCell-root': {
        borderBottom: 'none',
        whiteSpace: 'nowrap',
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
