import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '& .MuiInputBase-input': {
        padding: '0.5rem 1rem 0.5rem 0',
        fontSize: '0.875rem',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiOutlinedInput-root': {
        background: '#F6F7F9',
      },
      '& .outline-input__icon': {
        fill: '#999999',
      },
      '& .flex': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      '& .data-container__table': {
        '& .MuiTableCell-root': {
          border: 'none',
        },
      },
      '& .table__row': {
        '&:nth-of-type(odd)': {
          background: '#F8F8F8',
          '& .rank': {
            '&:nth-of-type(odd)': {
              background: '#FFFFFF',
            },
          },
        },
        '&:hover': {
          cursor: 'pointer',
        },
        '& .rank': {
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          padding: '8px',
          background: '#F8F8F8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .status': {
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
    },
  });

  return {
    classes: useStyles(),
  };
};
