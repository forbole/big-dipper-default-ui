import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      '&.activity-details': {
        background: 'white',
      },
      '& p': {
        margin: 0,
      },
      '& .activity-details__message': {
        marginBottom: '1rem',
      },
      '& .activity-details__content-wrapper': {
        borderTop: '1px solid #E8E8E8',
        padding: '1rem 0',
        '& .success': {
          fill: '#15CF74',
        },
        '& .fail': {
          fill: '#FF3A44',
        },
      },
    },
    mobile: {
      padding: '1rem',
      '& .content-wrapper__label': {
        marginBottom: '0.5rem',
      },
    },
    desktop: {
      padding: '1.5rem',
      '& .activity-details__content-wrapper': {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gridGap: '1rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
