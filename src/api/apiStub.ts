import { Restaurent, Review, Score } from './definitions';

const reviewDb: Review[] = [
  {
    id: '1',
    menuItem: 'Big burger',
    restaurentId: '1',
    title: 'Great burgers ...!',
    description:
      'In Soho you can find this very nice place to have a good burger of your choice. The bread was outstanding, the fries and the coleslaw were ok.',
    tasteScore: Score.Great,
    visualPresentaionScore: Score.Excellent,
    textureScore: Score.Bad,
    image: new URL(`${process.env.PUBLIC_URL}'/img/sk-CK6tjAIMJWM-unsplash.jpg'`),
  },
  {
    id: '2',
    menuItem: 'Cheese burger',
    restaurentId: '2',
    title: 'Ok i guess',
    description:
      "My go-to, especially after a long-haul flight. Do not be deceived by the burger that looks a bit small... it's the perfect portion and comes with a ton of rosemary chips.",
    tasteScore: Score.Bad,
    visualPresentaionScore: Score.Mediocre,
    textureScore: Score.Great,
    image: new URL(`${process.env.PUBLIC_URL}'/img/pexels-roman-odintsov-4871115.jpg'`),
  },
  {
    id: '3',
    menuItem: 'No. 3',
    restaurentId: '3',
    title: 'My goto place',
    description:
      'Understanding; we were seated before a group in front of us, and one of the girls said something in a different language. Little did she know, the host spoke the same language and called her out and said there was a table for 2 open when she was with a table of 3. Her ears',
    tasteScore: Score.Excellent,
    visualPresentaionScore: Score.Excellent,
    textureScore: Score.Mediocre,
    image: new URL(`${process.env.PUBLIC_URL}'/img/pexels-engin-akyurt-2725744.jpg'`),
  },
  {
    id: '4',
    menuItem: 'The wammy',
    restaurentId: '4',
    title: 'Too greasy',
    description:
      'Well holy crap, these are some delicious sandwiches. For our first meal in London, we needed something quickly prepared and easily accessible. This was about 7-10 min walk and thankfully there was a table outside as we walked up. After careful debate, we chose to get one of the honest burger and the buffalo chicken special then split the meals. As',
    tasteScore: Score.Mediocre,
    visualPresentaionScore: Score.Mediocre,
    textureScore: Score.Bad,
    image: new URL(`${process.env.PUBLIC_URL}'/img/mae-mu-I7A_pHLcQK8-unsplash.jpg'`),
  },
  {
    id: '5',
    menuItem: 'The Supreme',
    restaurentId: '5',
    title: 'Very big',
    description:
      'his place was a really good find near Picadilly Circus. Didnt wait very long when we got there but it was busy. Staff was nice. Food was good. Ill definitely go back during my next trip to London.',
    tasteScore: Score.Great,
    visualPresentaionScore: Score.Bad,
    textureScore: Score.Bad,
    image: new URL(`${process.env.PUBLIC_URL}'/img/jon-parry-4A9IELfRdwE-unsplash.jpg'`),
  },
  {
    id: '6',
    menuItem: 'The double double',
    restaurentId: '6',
    title: 'Never again',
    description:
      "After craving burgers we tried to decide between going to 'Honest Burgers' and 'Burger and Lobster' but ended up choosing Honest Burger since we had never been. By far the best decision of the night. The 15-20 minute wait outside in the cold rain was worth it. While we waited, one of the waiters would consistently come outside to keep everyone updated on the wait time and make a joke or two. Staff was very personable which made waiting less annoying.",
    tasteScore: Score.Horrible,
    visualPresentaionScore: Score.Bad,
    textureScore: Score.Bad,
    image: new URL(`${process.env.PUBLIC_URL}'/img/igor-rand-4LZPmKbgQiQ-unsplash.jog'`),
  },
  {
    id: '7',
    menuItem: 'Mikes',
    restaurentId: '7',
    title: 'Quite expensive',
    description:
      'We had a hard time finding flavorful food while on our trip. Honest Burger not only had great staff, but it was the best food we found while in London.',
    tasteScore: Score.Mediocre,
    visualPresentaionScore: Score.Excellent,
    textureScore: Score.Bad,
    image: new URL(`${process.env.PUBLIC_URL}'/img/food-photographer-david-fedulov-X92WLoaQ1_o-unsplash.jpg'`),
  },
];

const restaurentDb: Restaurent[] = [
  {
    id: '1',
    name: 'The Burger Joint',
    physicalAdress: {
      addressLine1: '203 Madison Ave.',
      city: 'London',
      country: 'England',
      zipcode: 'ZA452 232',
    },
    phoneNumber: '123 223 112',
    openingHours: {
      monday: {
        from: '10:00',
        to: '17:00',
      },
      tuesday: {
        from: '10:00',
        to: '17:00',
      },
      wednesday: {
        from: '10:00',
        to: '17:00',
      },
      thursday: {
        from: '10:00',
        to: '17:00',
      },
      friday: {
        from: '10:00',
        to: '17:00',
      },
      saturday: {
        from: '12:00',
        to: '22:00',
      },
      sunday: {
        from: '',
        to: '',
      },
    },
  },
  {
    id: '2',
    name: 'That Burger Place',
    physicalAdress: {
      addressLine1: '502 Hudson Street',
      city: 'London',
      country: 'England',
      zipcode: 'ZA452 232',
    },
    phoneNumber: '987 654 321',
    openingHours: {
      monday: {
        from: '10:00',
        to: '17:00',
      },
      tuesday: {
        from: '10:00',
        to: '17:00',
      },
      wednesday: {
        from: '10:00',
        to: '17:00',
      },
      thursday: {
        from: '10:00',
        to: '17:00',
      },
      friday: {
        from: '10:00',
        to: '17:00',
      },
      saturday: {
        from: '12:00',
        to: '22:00',
      },
      sunday: {
        from: '',
        to: '',
      },
    },
  },
  {
    id: '3',
    name: 'The Grill',
    physicalAdress: {
      addressLine1: '232 By the ocean',
      city: 'London',
      country: 'England',
      zipcode: 'ZA452 232',
    },
    phoneNumber: '987 454 213',
    openingHours: {
      monday: {
        from: '10:00',
        to: '17:00',
      },
      tuesday: {
        from: '10:00',
        to: '17:00',
      },
      wednesday: {
        from: '10:00',
        to: '17:00',
      },
      thursday: {
        from: '10:00',
        to: '17:00',
      },
      friday: {
        from: '10:00',
        to: '17:00',
      },
      saturday: {
        from: '12:00',
        to: '22:00',
      },
      sunday: {
        from: '',
        to: '',
      },
    },
  },
  {
    id: '4',
    name: 'Fantastic food',
    physicalAdress: {
      addressLine1: '999 Fantastic street',
      city: 'London',
      country: 'England',
      zipcode: 'ZA452 232',
    },
    phoneNumber: '111 221 112',
    openingHours: {
      monday: {
        from: '10:00',
        to: '17:00',
      },
      tuesday: {
        from: '10:00',
        to: '17:00',
      },
      wednesday: {
        from: '10:00',
        to: '17:00',
      },
      thursday: {
        from: '10:00',
        to: '17:00',
      },
      friday: {
        from: '10:00',
        to: '17:00',
      },
      saturday: {
        from: '12:00',
        to: '22:00',
      },
      sunday: {
        from: '',
        to: '',
      },
    },
  },
  {
    id: '5',
    name: 'Tokyo Burgers',
    physicalAdress: {
      addressLine1: '111 Marketplace',
      city: 'London',
      country: 'England',
      zipcode: 'ZA452 232',
    },
    phoneNumber: '987 654 321',
    openingHours: {
      monday: {
        from: '10:00',
        to: '17:00',
      },
      tuesday: {
        from: '10:00',
        to: '17:00',
      },
      wednesday: {
        from: '10:00',
        to: '17:00',
      },
      thursday: {
        from: '10:00',
        to: '17:00',
      },
      friday: {
        from: '10:00',
        to: '17:00',
      },
      saturday: {
        from: '12:00',
        to: '22:00',
      },
      sunday: {
        from: '',
        to: '',
      },
    },
  },
  {
    id: '6',
    name: 'Bread n Beef',
    physicalAdress: {
      addressLine1: '122 Butcher Street',
      city: 'London',
      country: 'England',
      zipcode: 'ZA452 232',
    },
    phoneNumber: '987 654 888',
    openingHours: {
      monday: {
        from: '10:00',
        to: '17:00',
      },
      tuesday: {
        from: '10:00',
        to: '17:00',
      },
      wednesday: {
        from: '10:00',
        to: '17:00',
      },
      thursday: {
        from: '10:00',
        to: '17:00',
      },
      friday: {
        from: '10:00',
        to: '17:00',
      },
      saturday: {
        from: '12:00',
        to: '22:00',
      },
      sunday: {
        from: '',
        to: '',
      },
    },
  },
];

const delayInMilliseconds = 400;

async function useGetAllReviews(): Promise<Review[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviewDb);
    }, delayInMilliseconds);
  });
}

async function useGetRestaurentById(id: string): Promise<Review[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviewDb);
    }, delayInMilliseconds);
  });
}

async function useAddReview(newReview: Review): Promise<void> {
  return new Promise(() => {
    setTimeout(() => {
      reviewDb.push(newReview);
    }, delayInMilliseconds);
  });
}

export const api = { useGetAllReviews, useAddReview };
