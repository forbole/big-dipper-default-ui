import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '&.pagination-actions': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '0.4rem',
      },
      '& .pagination-actions__page': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& .pagination-actions__page, & .MuiIconButton-root': {
        background: '#F6F7F9',
        margin: '0 0.25rem',
        height: '30px',
        width: '30px',
      },
      '& .MuiIconButton-root': {
        borderRadius: '0',
      },
      '& .MuiIconButton-root:hover': {
        background: '#F6F7F9',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
