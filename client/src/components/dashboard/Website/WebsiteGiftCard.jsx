import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const WebsiteGiftCards = ({ giftCards, couple, coupleWebsite }) => {
  const [pushItemTo, setPushItemTo] = useState(0);
  const [col, setCol] = useState(4);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltip, setTooltip] = useState({});
  const [selected, setSelected] = useState(null);

  const isLargeDevice = useMediaQuery('only screen and (min-width: 992px)');
  const isMediumDevice = useMediaQuery('only screen and (max-width: 991px)');
  const isSmallDevice = useMediaQuery('only screen and (max-width: 767px)');

  console.log('sonjoy', giftCards);

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

  return (
    <div className=' from-[#FCE3EB] to-white relative'>
      <div className='grid w-full grid-cols-2 gap-5 mx-auto sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 md:gap-10'>
        {giftCards?.map(giftCard =>
          coupleWebsite ? (
            <Link
              key={giftCard._id}
              href={`/couple/${couple?.username}/${giftCard?._id}/checkout`}
            >
              <a className='transition duration-300 hover:scale-110'>
                <Image
                  width={245}
                  height={157}
                  src={giftCard.image}
                  alt={giftCard.name}
                  className='w-full'
                />
              </a>
            </Link>
          ) : (
            <Link key={giftCard._id} href={`#`}>
              <a className='transition duration-300 hover:scale-110'>
                <Image
                  width={245}
                  height={157}
                  src={giftCard.image}
                  alt={giftCard.name}
                  className='w-full'
                />
              </a>
            </Link>
          )
        )}
      </div>

      {coupleWebsite ? (
        <div className='flex justify-center mt-10'>
          <Link href='#'>
            <button className='text-lg font-semibold font-inter customLabel border-2 transition-colors duration-300 border-[#DEDEDE] px-10 rounded py-1 bg-white text-primary hover:bg-primary hover:text-white'>
              See All Gift Cards
            </button>
          </Link>
        </div>
      ) : (
        <div className='flex justify-end pr-2'>
          <Link href='#'>
            <a className='text-lg font-semibold font-inter hover:underline customLabel'>
              See All Gift Cards
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WebsiteGiftCards;
