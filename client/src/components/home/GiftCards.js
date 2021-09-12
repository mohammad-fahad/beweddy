import { LinkButton, Heading } from "@components/shared";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";
import StartedButton from "@components/shared/StartedButton";

const giftCards = [
  {
    name: "Macy's",
    image: "/images/macys.png",
    description:
      "A Macy’s E-Gift Card is appreciated by one and all. With a store full of wonderful items for home, weekend or work, it’s the opportunity to get exactly what you want.  Recipients can choose from Macy’s incredible selection of fashions, furnishings and so much more.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Amazon",
    image: "/images/amazon.png",
    description:
      "Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Walmart",
    image: "/images/walmart.png",
    description:
      "With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Starbucks",
    image: "/images/starbucks.png",
    description:
      "A Starbucks Card can bring a little goodness into everyone’s day. Whether you want to cheer up a friend who loves her morning mocha. Or reward yourself with your favorite flavored iced tea. The Starbucks Card is a great way for you or a loved one to enjoy a slice of happiness. Redeem it at thousands of Starbucks locations. Register the Card to earn free drinks or food and other great rewards. Reload it whenever you need to.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Cabelas",
    image: "/images/cabelas.png",
    description:
      "As the World's Foremost Outfitter of Hunting, Fishing and Outdoor gear, Cabela's offers over 150,000 top-quality products to enhance any outing. In addition to a huge selection of catalogs and an industry leading website, the large destination Retail showrooms offer a retail experience like no other! Customer satisfaction is guaranteed.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "CineMark",
    image: "/images/cinemark.png",
    description:
      "Give the gift of entertainment! Cinemark gift cards make the perfect gift for any occasion. Buy one for yourself, or give it as a gift. Cinemark gift cards can be redeemed online at Cinemark.com or at any local theatre for box office and concessions.     ",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Target",
    image: "/images/target.png",
    description:
      "Target GiftCards are the rewarding choice, letting you shop for thousands of items at more than 1,800 Target stores in the U.S. and online at Target.com. From toys and electronics to clothing and housewares, find exactly what you're looking for at Target.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Texas",
    image: "/images/texas.png",
    description:
      "Based in Louisville, Kentucky, Texas Roadhouse opened its doors in 1993 and has more than 611 locations in 49 states and 10 countries. The family-friendly restaurant is famous for hand-cut steaks, made-from-scratch sides, fresh-baked bread, and a lively atmosphere. In 2018, Texas Roadhouse was named one of America’s Best Large Employers by Forbes. Texas Roadhouse was also recognized by Newsweek as one of America’s Best Customer Service restaurants in the Casual Dining category in 2019. For more information, visit www.texasroadhouse.com.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Nike",
    image: "/images/nike.png",
    description:
      "Nike Gift Cards unlock a world of footwear, apparel, and equipment. Gift Cards are redeemable at Nike.com, Converse.com and at Nike and Converse-owned retail locations in the United States and Puerto Rico, or by phone at 1-800-806-6453.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Bath & Body Works",
    image: "/images/bath&body.png",
    description:
      "We Make Fragrance Fun!™ From head-to-toe and throughout your home, Bath & Body Works brings you the best indulgences with exclusive Signature Collection scents, the world’s best Home Fragrances, Anti-Bacterial Hand Soaps & Sanitizers, perfect gifts & so much more!",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "DoorDash",
    image: "/images/doordash.png",
    description:
      "Your favorite restaurants, delivered. Gift the gift of food delivery with a DoorDash gift card. The DoorDash app connects your favorite people with the foods they love from more than 310,000 local and national restaurants across 4,000 cities in the US and Canada. Gift food delivery for easier evenings, happier days, and more time to enjoy the people and things they love.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Chili's",
    image: "/images/chilis.png",
    description:
      "From fresh hand-prepared salads to mouthwatering burgers, Chili’s kicks up the flavor with food that is anything but ordinary. To use your Chili’s eGift Card, this must be printed and presented in the restaurant in order to be accepted.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Crypto Gift Card",
    image: "/images/crypto-card.png",
    // description:
    //   "*Disney is not a sponsor of the rewards or otherwise affiliated with the reward program. The logos and other identifying marks attached are trademarks of and owned by each represented company and/or its affiliates. Please visit each company's website for additional terms and conditions.",
    // currency: 'USD',
    // amount: 25.6,
  },
  // {
  //   name: 'Disney',
  //   image: '/images/disney.png',
  //   description:
  //     "*Disney is not a sponsor of the rewards or otherwise affiliated with the reward program. The logos and other identifying marks attached are trademarks of and owned by each represented company and/or its affiliates. Please visit each company's website for additional terms and conditions.",
  //   // currency: 'USD',
  //   // amount: 25.6,
  // },
  {
    name: "Nordstrom",
    image: "/images/nordstrom.png",
    description:
      "Nordstrom, one of the nation's leading fashion specialty retailers, offers a large selection of quality fashion apparel, shoes, cosmetics and accessories for men, women and children, including a comprehensive offering of top brand names and designer collections. Nordstrom is committed to providing customers with the best possible service, and to improving it every day. Free shipping and free returns, mobile shopping and exciting new retail partnerships offer Nordstrom continued opportunities to serve more customers in more ways with a fresh, relevant shopping experience and inspiring style. Nordstrom serves customers through Nordstrom Rack stores and online at nordstromrack.com and flash-sale site Hautelook.com. Nordstrom is excited to give 1% of all gift card sales to nonprofit organizations within the communities they serve.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: "Mastercard® Prepaid Card USD",
    image: "/images/mastercard.png",
    description:
      "A Mastercard Prepaid Card gives you the flexibility to shop anywhere Mastercard is accepted around the world. You will receive an email with instructions for selecting either a virtual or physical card. Choose a virtual card that's available immediately, or a physical card sent via mail (shipping and handling fee of $3.00 to be deducted from card balance). ",
  },
  {
    name: "Best Buy",
    image: "/images/best-buy.png",
    description:
      "Best Buy® has all of the tech that tech lovers love. Whether you’re a video game enthusiast, a kitchen gadget groupie, or a fan of wireless headphones, there’s lots of tech for you to discover in store, online or on our app. And if you’re not sure what you’re looking for, Blue Shirts and Geek Squad Agents are here for you every step of the way to share expert advice and guidance.",
  },
];

const GiftCards = () => {
  const [pushItemTo, setPushItemTo] = useState(0);
  const [col, setCol] = useState(4);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltip, setTooltip] = useState({});
  const [selected, setSelected] = useState(null);

  const isLargeDevice = useMediaQuery("only screen and (min-width: 992px)");
  const isMediumDevice = useMediaQuery("only screen and (max-width: 991px)");
  const isSmallDevice = useMediaQuery("only screen and (max-width: 767px)");

  useEffect(() => {
    if (isSmallDevice) {
      return setCol(2);
    }
    if (isMediumDevice) {
      setCol(3);
    }
    if (isLargeDevice) {
      setCol(4);
    }
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  const handleTooltip = (index) => {
    const itemRowNumber = Math.ceil(index / col);
    setPushItemTo(itemRowNumber * col - index + index);
    setShowTooltip(true);
    setSelected(index - 1);
  };

  return (
    <div className="bg-gradient-to-br from-[#FCE3EB] to-white relative">
      <img
        src="/icons/safe-checkout.png"
        alt=""
        className="absolute w-16 h-10 right-5 sm:right-12 bottom-5 sm:bottom-10 sm:w-20 sm:h-16"
      />
      <div className="container py-20">
        <h2 className="max-w-3xl pb-8 mx-auto text-4xl text-center capitalize commonTitle">
          Receive Gifts With The Best <br /> Gift Card Registry
        </h2>
        <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary" />

        <div className="relative grid w-full grid-cols-2 px-5 mx-auto my-20 md:grid-cols-3 lg:grid-cols-4 sm:px-0 sm:max-w-full gap-x-5 sm:gap-x-10">
          {giftCards.slice(0, -1).map((giftCard, index) => {
            return (
              <Fragment key={index}>
                <div
                  className={`w-full py-5 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 ease-easing relative ${
                    selected === index ? "" : "hover:scale-110"
                  }`}
                  onClick={() => {
                    handleTooltip(index + 1);
                    setTooltip(giftCard);
                  }}
                >
                  {selected === index && (
                    <>
                      <div className="absolute bottom-[-12px] left-6 h-8 w-8 border-4 border-gray-200 border-t-transparent border-r-transparent rotate-[135deg] z-10 bg-white"></div>
                      <div className="absolute bottom-[-1rem] left-6 h-8 w-8 border-4 border-transparent rotate-[135deg] z-30 bg-white"></div>
                    </>
                  )}
                  <Image
                    width={287}
                    height={170}
                    src={giftCard.image}
                    alt={giftCard.name}
                    className="w-full h-full"
                  />
                </div>
                {index + 1 === pushItemTo && showTooltip && (
                  <div className="relative z-20 py-12 -mt-3 bg-white border-2 border-gray-200 rounded-lg col-span-full px-14">
                    <div className="absolute right-5 top-5">
                      <button
                        onClick={() => {
                          setShowTooltip((prev) => !prev);
                          setSelected(null);
                        }}
                      >
                        <XIcon className="w-6 h-6 transition duration-300 hover:text-gray-500" />
                      </button>
                    </div>
                    <div className="flex divide-gray-100 md:divide-x md:flex-row">
                      <img
                        src={tooltip.image}
                        alt={tooltip.name}
                        className="hidden object-cover w-64 h-40 md:mr-10 md:block"
                      />
                      <div className="md:pl-10">
                        <h4 className="text-2xl md:text-3xl font-medium text-[#f16521]">
                          {tooltip.name}
                        </h4>
                        <p className="mt-3 text-sm font-light text-gray-600">
                          {tooltip.description}
                        </p>
                      </div>
                    </div>
                    {(tooltip.currency || tooltip.amount) && (
                      <div className="flex items-center mt-16 space-x-16">
                        {tooltip.currency && (
                          <p className="text-sm">
                            <strong className="font-semibold uppercase">
                              Currency
                            </strong>
                            : {tooltip.currency}
                          </p>
                        )}
                        {tooltip.amount && (
                          <p className="text-sm">
                            <strong className="font-semibold">Amount</strong>:
                            any
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </Fragment>
            );
          })}
          <Link href="/">
            <a className="flex items-center">
              <div className="flex flex-col items-center justify-center w-[287px] h-[170px] py-5 overflow-hidden transition-transform duration-300 border-2 cursor-pointer border-primary rounded-xl ease-easing customBox">
                <h1 className="text-[64px] relative commonTitle">
                  100+
                  <span className="text-[18px] absolute -bottom-3 right-0 subTitle ">
                    See All
                  </span>
                </h1>
              </div>
            </a>
          </Link>
        </div>
        {/* <div className="absolute z-20 mx-auto transition duration-200 left-2/4 -translate-x-2/4 -bottom-3 hover:scale-110">
          <Link href="/create-website">
            <a className="py-3 text-base bg-[#ffffff] border-2 px-14 whitespace-nowrap md:px-14 border-primary text-primary rounded-3xl">
              See More
            </a>
          </Link>
        </div> */}
        {/* <div className="absolute z-20 mx-auto transition duration-200 left-2/4 -translate-x-2/4 -bottom-3 hover:scale-110">
          <Link href="/create-website">
            <a className="py-3 text-base font-bold bg-white border-2 p-11 whitespace-nowrap border-primary text-primary rounded-3xl">
              Let's Get Started
            </a>
          </Link>
        </div> */}
        <StartedButton className="-bottom-3" />
      </div>
    </div>
  );
};

export default GiftCards;
