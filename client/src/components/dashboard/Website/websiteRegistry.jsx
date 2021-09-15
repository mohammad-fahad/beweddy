import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/outline';

const WebsiteRegistry = ({ registries }) => {
  return (
    <div className=' from-[#FCE3EB] to-white relative'>
      <div class='flex flex-wrap justify-center items-center gap-x-5 gap-y-3 w-full mb-5'>
        {registries?.map(registry => (
          <div
            key={registry._id}
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
                <Image width={200} height={80} src={registry.image} />
              </div>
            </div>

            <div className='flex flex-col py-4 text-center'>
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

      <div className='flex justify-end pr-2'>
        <Link href='/'>
          <a className='text-lg font-semibold font-inter hover:underline customLabel'>
            See All Registries
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteRegistry;
