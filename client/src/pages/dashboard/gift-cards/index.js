import Head from 'next/head';
import Image from 'next/image';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Button, Footer, Loader } from '@components/index';
import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardContainer from '@components/dashboard/DashboardContainer';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { getGifts } from '@services/Gift';
import { attemptUpdateUserProfile } from '@features/user/userActions';
import { differenceBy } from 'lodash';

const giftCards = [
  {
    name: "Macy's",
    image: '/images/macys.png',
    description:
      'A Macy’s E-Gift Card is appreciated by one and all. With a store full of wonderful items for home, weekend or work, it’s the opportunity to get exactly what you want.  Recipients can choose from Macy’s incredible selection of fashions, furnishings and so much more.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Amazon',
    image: '/images/amazon.png',
    description:
      'Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Walmart',
    image: '/images/walmart.png',
    description:
      'With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Starbucks',
    image: '/images/starbucks.png',
    description:
      'A Starbucks Card can bring a little goodness into everyone’s day. Whether you want to cheer up a friend who loves her morning mocha. Or reward yourself with your favorite flavored iced tea. The Starbucks Card is a great way for you or a loved one to enjoy a slice of happiness. Redeem it at thousands of Starbucks locations. Register the Card to earn free drinks or food and other great rewards. Reload it whenever you need to.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Cabelas',
    image: '/images/cabelas.png',
    description:
      "As the World's Foremost Outfitter of Hunting, Fishing and Outdoor gear, Cabela's offers over 150,000 top-quality products to enhance any outing. In addition to a huge selection of catalogs and an industry leading website, the large destination Retail showrooms offer a retail experience like no other! Customer satisfaction is guaranteed.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'CineMark',
    image: '/images/cinemark.png',
    description:
      'Give the gift of entertainment! Cinemark gift cards make the perfect gift for any occasion. Buy one for yourself, or give it as a gift. Cinemark gift cards can be redeemed online at Cinemark.com or at any local theatre for box office and concessions.     ',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Target',
    image: '/images/target.png',
    description:
      "Target GiftCards are the rewarding choice, letting you shop for thousands of items at more than 1,800 Target stores in the U.S. and online at Target.com. From toys and electronics to clothing and housewares, find exactly what you're looking for at Target.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Texas',
    image: '/images/texas.png',
    description:
      'Based in Louisville, Kentucky, Texas Roadhouse opened its doors in 1993 and has more than 611 locations in 49 states and 10 countries. The family-friendly restaurant is famous for hand-cut steaks, made-from-scratch sides, fresh-baked bread, and a lively atmosphere. In 2018, Texas Roadhouse was named one of America’s Best Large Employers by Forbes. Texas Roadhouse was also recognized by Newsweek as one of America’s Best Customer Service restaurants in the Casual Dining category in 2019. For more information, visit www.texasroadhouse.com.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Nike',
    image: '/images/nike.png',
    description:
      'Nike Gift Cards unlock a world of footwear, apparel, and equipment. Gift Cards are redeemable at Nike.com, Converse.com and at Nike and Converse-owned retail locations in the United States and Puerto Rico, or by phone at 1-800-806-6453.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Bath & Body Works',
    image: '/images/bath&body.png',
    description:
      'We Make Fragrance Fun!™ From head-to-toe and throughout your home, Bath & Body Works brings you the best indulgences with exclusive Signature Collection scents, the world’s best Home Fragrances, Anti-Bacterial Hand Soaps & Sanitizers, perfect gifts & so much more!',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'DoorDash',
    image: '/images/doordash.png',
    description:
      'Your favorite restaurants, delivered. Gift the gift of food delivery with a DoorDash gift card. The DoorDash app connects your favorite people with the foods they love from more than 310,000 local and national restaurants across 4,000 cities in the US and Canada. Gift food delivery for easier evenings, happier days, and more time to enjoy the people and things they love.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Chili's",
    image: '/images/chilis.png',
    description:
      'From fresh hand-prepared salads to mouthwatering burgers, Chili’s kicks up the flavor with food that is anything but ordinary. To use your Chili’s eGift Card, this must be printed and presented in the restaurant in order to be accepted.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Disney',
    image: '/images/disney.png',
    description:
      "*Disney is not a sponsor of the rewards or otherwise affiliated with the reward program. The logos and other identifying marks attached are trademarks of and owned by each represented company and/or its affiliates. Please visit each company's website for additional terms and conditions.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Nordstrom',
    image: '/images/nordstrom.png',
    description:
      "Nordstrom, one of the nation's leading fashion specialty retailers, offers a large selection of quality fashion apparel, shoes, cosmetics and accessories for men, women and children, including a comprehensive offering of top brand names and designer collections. Nordstrom is committed to providing customers with the best possible service, and to improving it every day. Free shipping and free returns, mobile shopping and exciting new retail partnerships offer Nordstrom continued opportunities to serve more customers in more ways with a fresh, relevant shopping experience and inspiring style. Nordstrom serves customers through Nordstrom Rack stores and online at nordstromrack.com and flash-sale site Hautelook.com. Nordstrom is excited to give 1% of all gift card sales to nonprofit organizations within the communities they serve.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Mastercard® Prepaid Card USD',
    image: '/images/mastercard.png',
    description:
      "A Mastercard Prepaid Card gives you the flexibility to shop anywhere Mastercard is accepted around the world. You will receive an email with instructions for selecting either a virtual or physical card. Choose a virtual card that's available immediately, or a physical card sent via mail (shipping and handling fee of $3.00 to be deducted from card balance). ",
  },
  {
    name: 'Best Buy',
    image: '/images/best-buy.png',
    description:
      'Best Buy® has all of the tech that tech lovers love. Whether you’re a video game enthusiast, a kitchen gadget groupie, or a fan of wireless headphones, there’s lots of tech for you to discover in store, online or on our app. And if you’re not sure what you’re looking for, Blue Shirts and Geek Squad Agents are here for you every step of the way to share expert advice and guidance.',
  },
];

const GiftCardPage = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector(state => state.user);
  const { data, isLoading, isFetching } = useQuery('gifts', getGifts);
  const [selected, setSelected] = useState([]);

  //* Filter gifts. If user already added
  const gifts = differenceBy(data, user?.giftCards, '_id');

  //* Handle Card Select
  const handleItemSelect = id => {
    const index = selected.findIndex(item => item === id);
    if (index === -1) {
      setSelected(prev => [...prev, id]);
    } else {
      setSelected(prev => prev.filter(item => item !== id));
    }
  };

  //* Add Registry item to user
  const addGifts = () => {
    dispatch(attemptUpdateUserProfile({ giftCards: selected }));
    setSelected([]);
  };

  if (isLoading) return <Loader />;

  return (
    <Fragment>
      <Head>
        <title>Beweddy | Gift Cards </title>
      </Head>
      {loading && <Loader />}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title='Gift Cards' />
        <DashboardContainer>
          {/* <div class='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-5 mb-12 '> */}
          <motion.div class='flex items-center justify-center flex-wrap gap-5 mb-12 '>
            {gifts?.length <= 0
              ? 'All Gift Cards Are Added'
              : gifts?.map(gift => (
                <motion.div
                  layout
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='select-gift'
                >
                  <input
                    name='gift-card'
                    type='checkbox'
                    value={gift._id}
                    className='hidden'
                    id={gift._id}
                    onChange={e => handleItemSelect(e.target.id)}
                    checked={selected.includes(gift._id)}
                  />
                  {/* // <div className="justify-self-center relative max-w-[260px] max-h-[155px] overflow-hidden transition duration-300 cursor-pointer rounded-xl ease-easing"> */}
                  <label
                    className='inline-block relative max-w-[200px] max-h-[120px] w-full h-full overflow-hidden transition duration-300 cursor-pointer rounded-xl ease-easing'
                    htmlFor={gift._id}
                  >
                    <Image
                      width={200}
                      height={120}
                      src={gift.image}
                      alt={gift.name}
                    />

                    {/* <div className="flex items-center justify-center w-full h-full opacity-0 hover:opacity-100"> */}
                    <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center transition duration-300 opacity-0 bg-primary/80 hover:opacity-100'>
                      {/* <img src="/icons/plus.png" alt="" className="text-white w-9" /> */}
                      <PlusIcon className='w-12 h-12 text-white plus' />
                      <MinusIcon className='w-12 h-12 text-white minus hidden' />
                    </div>
                  </label>
                </motion.div>
              ))}
            {/* <button
              className="py-2 px-10 border-2 rounded-[10px] mt-5 bg-black transition duration-300
text-white  font-inter font-medium text-center	"
            > */}
          </motion.div>

          {/* <div>
            <h1 className="!text-[24px]">Crypto Credit Card</h1>
          </div>

          <div class="flex items-center justify-center flex-wrap gap-5 mb-12 ">
            {giftCards?.map((gift) => (
              <div className="justify-self-center relative max-w-[200px] max-h-[120px] overflow-hidden transition duration-300 cursor-pointer rounded-xl ease-easing">
                <Image width={200} height={120} src={el.image} alt={el.name} />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center transition duration-300 opacity-0 bg-primary/80 hover:opacity-100">
                  <PlusIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div> */}
          {gifts?.length > 0 && (
            <div>
              <Button
                label='SAVE'
                type='button'
                className='!rounded-[5px] ml-4'
                onClick={addGifts}
              />
            </div>
          )}
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(GiftCardPage);
