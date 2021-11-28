import { createStyles, TextInput } from '@mantine/core';
import React, { FC } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '300px auto',
  },
  searchHeader: {
    paddingRight: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    height: 300,
    backgroundImage: `url(${process.env.PUBLIC_URL}'/img/pexels-engin-akyurt-2725744.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  },
  searchField: { width: '100%' },
}));

export const FrontPage: FC = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.searchHeader}>
        <div className={classes.searchField}>
          <TextInput variant="filled" size="lg" type="search" />
        </div>
      </div>
      <div>Her kommer de seneste anmeldelser</div>
    </div>
  );
};
