import { Button, createStyles, Paper, Skeleton, Space, TextInput, Title } from '@mantine/core';
import React, { FC, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useApi } from '../../../api/apiStub';
import { Review } from '../../../api/definitions';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: '300px auto',
    backgroundColor: theme.colors.gray[1],
    height: '100%',
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
  latestReviews: {
    padding: theme.spacing.md,
  },
  reviews: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'stretch',
    alignItems: 'flex-start',
    gap: theme.spacing.md,
  },
  review: {
    maxWidth: 250,
  },
  reviewImg: {
    width: 250,
    height: 150,
    objectFit: 'cover',
  },
  reviewDescription: {
    height: 150,
    overflow: 'hidden',
  },
  readReviewBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export const FrontPage: FC = () => {
  const { classes } = useStyles();
  const { getRecentReviews } = useApi();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [recentReviews, setRecentReviews] = useState<Review[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const reviews = await getRecentReviews();
      setRecentReviews(reviews);
      setIsLoading(false);
    })();
  }, [getRecentReviews]);

  const loadingReviews = () => {
    return (
      <>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
          <Skeleton key={key} className={classes.review} height={400} width={250} />
        ))}
      </>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchHeader}>
        <div className={classes.searchField}>
          <TextInput
            icon={<BsSearch />}
            placeholder="Search for a place to eat"
            onClick={() => {
              setIsLoading((l) => !l);
            }}
            variant="filled"
            size="lg"
            type="search"
          />
        </div>
      </div>
      <div className={classes.latestReviews}>
        <Space h="md" />
        <Title order={3}>Latest reviews</Title>
        <div className={classes.reviews}>
          {isLoading
            ? loadingReviews()
            : recentReviews.map((rr) => (
                <div key={rr.id}>
                  <Paper className={classes.review} padding="md" shadow="xs">
                    <Title style={{ paddingTop: 0, marginTop: 0 }} order={5}>
                      {rr.title}
                    </Title>
                    <img className={classes.reviewImg} src={rr.image} alt="123" />
                    <div className={classes.reviewDescription}>{rr.description}</div>
                    <Space h="md" />
                    <div className={classes.readReviewBtn}>
                      <Button>Read</Button>
                    </div>
                  </Paper>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
