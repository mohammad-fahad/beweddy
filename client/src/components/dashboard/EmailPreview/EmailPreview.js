import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const EmailPreview = ({ message, handleSubmit, setIsOpen, uploadedFile }) => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <div className='flex items-start justify-between rounded-t'>
        <div class='grid grid-cols-12 gap-4 w-full customGrid customAlignCenter'>
          <div class='col-span-4 p-5 customGap'>
            <Image
              src={
                user?.role === 'venue' ? user?.venue?.logo : '/images/logo.png'
              }
              height={40}
              width={100}
              objectFit='contain'
            />
          </div>
          {!user?.venue && (
            <div class='col-span-6 p-5 customGap customAlignCenter'>
              <h1 className='flex items-center text-base font-normal leading-5 subTitle customContentText'>
                Let’s Eat, Drink & BeWeddy.
                <span className='ml-2'>
                  <img src='/Emoji.png' alt='emoji' />
                </span>
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className='relative flex-auto p-6 customGap'>
        {/* heading section */}
        <div className='text-black py-4 border-0 rounded bg-[#FCE0EB] flex justify-center '>
          <span className='flex items-center text-base font-normal leading-5 align-middle customLabel'>
            You have Received an Email Invitaion for Nates & Ashley’s Wedding.
            <span className='ml-2'>
              <img src='/handet.png' alt='emoji' />
            </span>
          </span>
        </div>
        {/* image section */}
        <div className='my-6'>
          {uploadedFile && (
            <img
              src={uploadedFile.url}
              alt=''
              className='h-auto max-w-full align-middle border-none rounded shadow'
            />
          )}
        </div>

        {/* body info section */}

        <div>
          <h1 className='text-4xl font-normal leading-10 text-center subTitle'>
            You’re Invited to Our Wedding
          </h1>
          <div className='w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-6' />
        </div>

        <div
          className='w-full pt-2 mx-auto sm:pt-10 customLabel'
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      </div>

      <div className='flex items-center w-full mx-auto my-3 sm:my-10 '>
        <button
          type='button'
          className='w-40 px-5 py-2 font-medium capitalize transition duration-300 border-2 border-gray-200 rounded-lg font-inter hover:bg-secondary-alternative/40 hover:border-primary customLabel'
          onClick={handleSubmit}
        >
          Send
        </button>
        <button
          type='button'
          className='w-40 px-5 py-2 ml-4 font-medium capitalize transition duration-300 border-2 border-gray-200 rounded-lg font-inter hover:bg-secondary-alternative/40 hover:border-primary customLabel'
          onClick={() => setIsOpen(false)}
        >
          Edit
        </button>
      </div>
    </>
  );
};
export default EmailPreview;
