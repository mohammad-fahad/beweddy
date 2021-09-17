import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const WebsiteGiftCards = ({ giftCards }) => {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 mx-auto w-full">
        {giftCards?.map((giftCard) => (
          <Link href={`/`}>
            <Image
              width={245}
              height={157}
              src={giftCard.image}
              alt={giftCard.name}
              className="w-full"
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-end pr-2">
        <Link href="#">
          <a className="text-lg font-semibold font-inter hover:underline customLabel">
            See All Gift Cards
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteGiftCards;
