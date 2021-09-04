import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "@components/shared";

const giftCards = [
  {
    name: "Macy's",
    image: "/logos/logo1.png",
    description:
      "A Macy’s E-Gift Card is appreciated by one and all. With a store full of wonderful items for home, weekend or work, it’s the opportunity to get exactly what you want.  Recipients can choose from Macy’s incredible selection of fashions, furnishings and so much more.",
  },
  {
    name: "Amazon",
    image: "/logos/logo2.png",
    description:
      "Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.",
  },
  {
    name: "Walmart",
    image: "/logos/logo3.png",
    description:
      "With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.",
  },
  {
    name: "Starbucks",
    image: "/logos/logo1.png",
    description:
      "A Starbucks Card can bring a little goodness into everyone’s day. Whether you want to cheer up a friend who loves her morning mocha. Or reward yourself with your favorite flavored iced tea. The Starbucks Card is a great way for you or a loved one to enjoy a slice of happiness. Redeem it at thousands of Starbucks locations. Register the Card to earn free drinks or food and other great rewards. Reload it whenever you need to.",
  },
  {
    name: "Cabelas",
    image: "/logos/logo2.png",
    description:
      "As the World's Foremost Outfitter of Hunting, Fishing and Outdoor gear, Cabela's offers over 150,000 top-quality products to enhance any outing. In addition to a huge selection of catalogs and an industry leading website, the large destination Retail showrooms offer a retail experience like no other! Customer satisfaction is guaranteed.",
  },
  {
    name: "CineMark",
    image: "/logos/logo3.png",
    description:
      "Give the gift of entertainment! Cinemark gift cards make the perfect gift for any occasion. Buy one for yourself, or give it as a gift. Cinemark gift cards can be redeemed online at Cinemark.com or at any local theatre for box office and concessions.     ",
  },
];

const WebsiteRegistry = () => {
  const [col, setCol] = useState(4);
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
      setCol(3);
    }
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  const handleTooltip = (index) => {
    const itemRowNumber = Math.ceil(index / col);
    setPushItemTo(itemRowNumber * col - index + index);
    setShowTooltip(true);
    setSelected(index - 1);
  };

  return (
    <div className=" from-[#FCE3EB] to-white relative">
      <div className="container">
        <div className="relative grid w-full grid-cols-2 px-5 mx-auto md:grid-cols-3 lg:grid-cols-3 sm:px-0 sm:max-w-full gap-x-5 sm:gap-x-10">
          {giftCards.map((giftCard, index) => (
            <div
              key={index}
              className="flex justify-center align-center w-full h-[300px] my-5 overflow-hidden  border-2 border-[#C8C8C8] cursor-pointer rounded-xl"
            >
              <div
                className={` flex items-center justify-center w-full h-full border-3  transition duration-300 relative group`}
              >
                <div
                  target="_blank"
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center w-full h-full opacity-0 hover:opacity-100 bg-gradient-to-r  group-hover:[120.68deg, #FCE3EB 30.04%, #FFFFFF 100%]"
                >
                  <Button
                    label="Create a Website"
                    type="submit"
                    className="mx-0 !py-2 !rounded-[5px]"
                  />
                  <Link href="/">
                    <a className="mt-5 text-[#0185FF]">Learn More</a>
                  </Link>
                </div>

                <div>
                  <img
                    src={giftCard.image}
                    alt={giftCard.name}
                    className="h-10 my-auto w-60"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link href="/">
            <a>
              <h2>See All Registries </h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebsiteRegistry;
