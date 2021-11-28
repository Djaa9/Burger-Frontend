import React, { FC } from 'react';
import { Paper, TextInput, Container, Button, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  submitButton: {
    marginTop: theme.spacing.md,
  },
}));

export const Login: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container size={400}>
        <Paper shadow="lg" padding="lg">
          <TextInput label="E-mail" type="email" />
          <TextInput label="Password" type="password" />
          <Button className={classes.submitButton} uppercase>
            Login
          </Button>
        </Paper>
      </Container>
    </>
  );
};
