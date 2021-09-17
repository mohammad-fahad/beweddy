import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const RegistryModal = ({ isModalOpen, setIsModalOpen }) => {
  function closeModal() {
    setIsModalOpen(false);
  }

  const { handleSubmit, register } = useForm({ mode: 'all' });
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-primary/40' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h4'
                  className='text-lg xs:text-xl sm:text-2xl font-medium leading-6 text-gray-900'
                >
                  Create new registry
                </Dialog.Title>
                <div className='my-5 sm:my-10 space-y-2 xs:space-y-5'>
                  <div className='space-y-2 flex flex-col'>
                    <label
                      htmlFor='title'
                      className='text-sm md:text-base font-medium md:font-semibold'
                    >
                      Registry Title
                    </label>
                    <input
                      id='title'
                      type='text'
                      className='text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px]'
                      placeholder='Enter registry title'
                      {...register('title', {
                        required: {
                          value: true,
                          message: 'Title is required!',
                        },
                      })}
                    />
                  </div>
                  <div className='space-y-2 flex flex-col'>
                    <label
                      htmlFor='image'
                      className='text-sm md:text-base font-medium md:font-semibold'
                    >
                      Registry Image
                    </label>
                    <input
                      id='image'
                      type='text'
                      className='text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px]'
                      placeholder='Enter image link here'
                      {...register('image', {
                        required: {
                          value: true,
                          message: 'Image link is required!',
                        },
                      })}
                    />
                  </div>
                  <div className='space-y-2 flex flex-col'>
                    <label
                      htmlFor='link'
                      className='text-sm md:text-base font-medium md:font-semibold'
                    >
                      Affiliate Link
                    </label>
                    <input
                      id='link'
                      type='text'
                      className='text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px]'
                      placeholder='Enter your affiliate link'
                      {...register('link', {
                        required: {
                          value: true,
                          message: 'Affiliate link is required!',
                        },
                      })}
                    />
                  </div>
                  <div className='space-y-2 flex flex-col'>
                    <label
                      htmlFor='description'
                      className='text-sm md:text-base font-medium md:font-semibold'
                    >
                      Description
                    </label>
                    <textarea
                      id='description'
                      type='text'
                      className='text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px]'
                      placeholder='Enter register description'
                      {...register('description')}
                    />
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-2 border-gray-100 rounded-md hover:bg-gray-100 '
                    onClick={closeModal}
                  >
                    cancel
                  </button>
                  <button
                    type='submit'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary border-2 border-primary rounded-md hover:bg-white hover:text-primary transition duration-300'
                    onClick={closeModal}
                  >
                    Create
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RegistryModal;
