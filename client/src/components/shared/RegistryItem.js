import { LinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RegistryItem = ({ registry, onChange, checked }) => {
  return (
    <motion.div
      layout
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='select-registry'
    >
      <input
        name='registry'
        type='checkbox'
        value={registry._id}
        className='hidden'
        {...{ onChange, checked }}
        id={registry._id}
      />
      <label
        htmlFor={registry._id}
        className='cursor-pointer p-4 max-w-[250px] inline-block bg-white border-4 rounded-md border-gray-200 hover:border-primary transition duration-300 w-full mx-auto'
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
          <h3 className='text-lg font-semibold font-inter'>{registry.title}</h3>
          <div>
            <button className='py-2 inline-block px-8 border-gray-900 border-2 rounded-[5px] mt-5 hover:bg-black transition duration-300 hover:text-white font-inter font-bold'>
              Link
            </button>
          </div>
        </div>
      </label>
    </motion.div>
  );
};

export default RegistryItem;
