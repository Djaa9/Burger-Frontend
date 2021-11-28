import React, { FC, useState } from 'react';
import { useMantineTheme, AppShell, Navbar, Header, Text, MediaQuery, Burger, createStyles, Button } from '@mantine/core';
import { Route, Routes, Navigate } from 'react-router';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FrontPage } from './FrontPage/FrontPage';
import { Restaurent } from './Restaurent/Restaurent';

const useStyles = createStyles((theme) => ({
  navBar: {
    backgroundColor: theme.colors.grape[9],
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
}));

export const Navigation: FC = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      padding={0}
      fixed
      navbar={
        <Navbar className={classes.navBar} padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300 }}>
          <Navbar.Section>Sektion 1</Navbar.Section>
          <Navbar.Section>Sektion 2</Navbar.Section>
          <Navbar.Section>Sektion 3</Navbar.Section>
          <Navbar.Section>Sektion 4</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} padding="md">
          <div className={classes.header}>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.colors.gray[6]} mr="xl" />
            </MediaQuery>

            <Text>Burger Frontend 1.0</Text>
            <div>
              <Button leftIcon={<BsPlusLg />} color="green" style={{ marginRight: theme.spacing.md, color: 'white' }}>
                Add review
              </Button>
              <Button component={Link} to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                Login / Signup
              </Button>
            </div>
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="front-page" />} />
        <Route path="front-page" element={<FrontPage />} />
        <Route path="restaurent/:id" element={<Restaurent />} />
      </Routes>
    </AppShell>
  );
};
