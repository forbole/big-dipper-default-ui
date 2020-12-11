import { makeStyles } from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles({
    root: {
      background: 'yellow',
      '& p': {
        margin: 0,
      },
      '& .activity-details__message': {
        marginBottom: '1rem',
      },
      '& .activity-details__content-wrapper': {
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
        paddingTop: '1rem',
        borderTop: '1px solid #E8E8E8',
        marginBottom: '0.5rem',
      },
      '& .content-wrapper__value': {
        marginBottom: '1rem',
      },
    },
    desktop: {
      padding: '1.5rem',
      '& .activity-details__content-wrapper': {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gridGap: '1.5rem',
      },
    },
  });

  return {
    classes: useStyles(),
  };
};
