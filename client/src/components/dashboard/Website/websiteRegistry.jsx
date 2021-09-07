import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/outline';

const registries = [
  {
    id: 1,
    title: 'Amazon Wedding Registry',
    link: 'https://github.com/muttakinhasib',
    image: '/images/registries/Amazon.png',
  },
  {
    id: 2,
    title: 'Bed Bath & Beyond',
    buttonText: 'Link',
    link: 'https://github.com/muttakinhasib',
    image: '/images/registries/bbbLogo.png',
  },
  {
    id: 3,
    title: 'Target Wedding Registry',
    buttonText: 'Link',
    link: 'https://github.com/muttakinhasib',
    image: '/images/registries/target.png',
  },
  // {
  //   id: 4,
  //   title: 'Bass Pro Shops',
  //   buttonText: 'Link',
  //   link: 'https://github.com/muttakinhasib',
  //   image: '/images/registries/bass-pro-shops.png',
  // },
];

const WebsiteRegistry = () => {
  const [col, setCol] = useState(4);
  const [selected, setSelected] = useState(null);

  return (
    <div className=' from-[#FCE3EB] to-white relative'>
      <div class='grid sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-full mb-5'>
        {registries?.map(registry => (
          <div
            key={registry.id}
            className='p-4 max-w-[280px] bg-white border-4 border-gray-200 hover:border-primary transition duration-300 w-full mx-auto'
          >
            <div
              className={`border-2 border-primary flex items-center justify-center h-[140px] w-full rounded-[10px] transition duration-300 relative group p-3`}
            >
              <Link href={registry.link}>
                <a
                  target='_blank'
                  className='max-w-[273px] rounded-lg flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 absolute inset-0 z-50 group-hover:bg-black/50'
                >
                  <LinkIcon className='w-8 h-8 text-white' />
                </a>
              </Link>
              <div>
                <Image
                  width={200}
                  height={80}
                  src={registry.image || '/images/registries/Amazon.png'}
                />
              </div>
            </div>

            <div className='py-4 text-center flex flex-col'>
              <h3 className='text-lg font-medium font-inter'>
                {registry.title}
              </h3>
              {/* <div>
                <button className='py-2 inline-block px-8 border-gray-900 border-2 rounded-[5px] mt-5 hover:bg-black transition duration-300 hover:text-white font-inter font-bold'>
                  Link
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-end'>
        <Link href='/'>
          <a className='font-semibold font-inter text-lg hover:underline'>
            See All Registries
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteRegistry;
