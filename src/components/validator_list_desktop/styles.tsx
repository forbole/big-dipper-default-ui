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
    },
  });

  return {
    classes: useStyles(),
  };
};
