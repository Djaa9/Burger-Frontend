import React, { FC } from 'react';
import { Paper, TextInput, Container, Button, createStyles, Anchor } from '@mantine/core';
import { ReactComponent as Logo } from '../assets/logo.svg';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${process.env.PUBLIC_URL}'/img/john-fornander-VedLcUfLi74-unsplash.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  loginContainer: {
    minWidth: 400,
  },
  actions: {
    marginTop: theme.spacing.md,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseLine',
    gap: theme.spacing.md,
  },
  brandTitle: {
    margin: theme.spacing.lg,
    display: 'flex',
    flexWrap: 'nowrap',
    gap: theme.spacing.lg,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  brandLabel: {
    fontSize: 45,
    textTransform: 'uppercase',
    fontWeight: 900,
    color: theme.colors.gray[1],
    WebkitTextStroke: `2px ${theme.colors.dark[7]}`,
  },
}));

export const Login: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.loginContainer}>
        <div className={classes.brandTitle}>
          <Logo />
          <div className={classes.brandLabel}>Burger Frontend 1.0</div>
        </div>
        <Paper shadow="lg" padding="lg">
          <TextInput label="E-mail" type="email" />
          <TextInput label="Password" type="password" />
          <div className={classes.actions}>
            <Anchor>Forgot password?</Anchor>
            <Button uppercase>Login</Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};
