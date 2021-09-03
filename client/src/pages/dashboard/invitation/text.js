import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Footer, Heading } from '@components/index';

import Select from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { Fragment, useEffect, useState } from 'react';
import { withAuthRoute } from '@hoc/withAuthRoute';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

const animatedComponents = makeAnimated();

const customStyles = {
  control: (
    { borderColor, backgroundColor, boxShadow, ...provided },
    { theme }
  ) => ({
    ...provided,
    width: '100%',
    // backgroundColor: 'rgba(243, 244, 246, 1)',
    borderColor: theme.colors.neutral90,
    '&:hover': {
      borderColor: theme.colors.neutral70,
    },
  }),
  valueContainer: style => ({
    ...style,
    padding: '6px 16px',
  }),
  placeholder: style => ({
    ...style,
    color: 'rgba(156, 163, 175, 1)',
    fontSize: '14px',
  }),
  input: style => ({
    ...style,
    outline: 'none',
    border: 'none',
  }),
};

const TextInvitesPage = () => {
  const { countries } = useSelector(state => state.countryList);

  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    if (countries?.length) {
      setSelectedCountry(
        countries.find(country => country.alpha3Code === 'USA')
      );
    }
  }, [countries]);

  return (
    <Fragment>
      <Head>
        <title>Beweddy | Text Invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title='Text Invites' />
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xxl:pr-0'>
              <div className='mb-5'>
                <h3 className='text-4xl pb-2'>
                  📲 Send Text & Superlink Invites
                </h3>
                <span className='h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative'></span>
              </div>
              <div className='grid md:grid-cols-3 gap-10'>
                <div className='md:col-span-2'>
                  <div className='space-y-5'>
                    <div className='flex justify-between'>
                      <Heading h3 className='!text-3xl !font-normal'>
                        New Message
                      </Heading>
                      <div className='flex items-center space-x-3'>
                        <svg
                          width='25'
                          height='25'
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.6226 3.97388H8.62256C6.96856 3.97388 5.62256 5.31988 5.62256 6.97388V7.97388H4.62256C4.35734 7.97388 4.10299 8.07923 3.91545 8.26677C3.72792 8.45431 3.62256 8.70866 3.62256 8.97388C3.62256 9.23909 3.72792 9.49345 3.91545 9.68098C4.10299 9.86852 4.35734 9.97388 4.62256 9.97388H5.62256V11.9739H4.62256C4.35734 11.9739 4.10299 12.0792 3.91545 12.2668C3.72792 12.4543 3.62256 12.7087 3.62256 12.9739C3.62256 13.2391 3.72792 13.4934 3.91545 13.681C4.10299 13.8685 4.35734 13.9739 4.62256 13.9739H5.62256V15.9739H4.62256C4.35734 15.9739 4.10299 16.0792 3.91545 16.2668C3.72792 16.4543 3.62256 16.7087 3.62256 16.9739C3.62256 17.2391 3.72792 17.4934 3.91545 17.681C4.10299 17.8685 4.35734 17.9739 4.62256 17.9739H5.62256V18.9739C5.62256 20.6279 6.96856 21.9739 8.62256 21.9739H19.6226C21.2766 21.9739 22.6226 20.6279 22.6226 18.9739V6.97388C22.6226 5.31988 21.2766 3.97388 19.6226 3.97388ZM7.62256 6.97388C7.62256 6.42288 8.07156 5.97388 8.62256 5.97388V7.97388H7.62256V6.97388ZM7.62256 9.97388H8.62256V11.9739H7.62256V9.97388ZM7.62256 13.9739H8.62256V15.9739H7.62256V13.9739ZM7.62256 18.9739V17.9739H8.62256V19.9739C8.07156 19.9739 7.62256 19.5249 7.62256 18.9739ZM20.6226 18.9739C20.6226 19.5249 20.1736 19.9739 19.6226 19.9739H9.62256V5.97388H19.6226C20.1736 5.97388 20.6226 6.42288 20.6226 6.97388V18.9739Z'
                            fill='black'
                          />
                          <path
                            d='M14.6226 13.4739C15.7271 13.4739 16.6226 12.5784 16.6226 11.4739C16.6226 10.3693 15.7271 9.47388 14.6226 9.47388C13.518 9.47388 12.6226 10.3693 12.6226 11.4739C12.6226 12.5784 13.518 13.4739 14.6226 13.4739Z'
                            fill='black'
                          />
                          <path
                            d='M14.6226 14.3299C13.0606 14.3299 12.1226 15.0449 12.1226 15.7589C12.1226 16.1159 13.0606 16.4739 14.6226 16.4739C16.0886 16.4739 17.1226 16.1169 17.1226 15.7589C17.1226 15.0449 16.1426 14.3299 14.6226 14.3299Z'
                            fill='black'
                          />
                        </svg>
                        <h4 className='text-lg font-medium'>
                          Add or input contacts
                        </h4>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <Heading h3>To</Heading>
                      <h5 className='text-base font-medium'>Recipients: 13</h5>
                    </div>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      // defaultValue={[colourOptions[4], colourOptions[5]]}
                      isMulti
                      styles={customStyles}
                      // options={colourOptions}
                    />
                    <Heading h3>From</Heading>
                    <div>
                      <div className='flex items-center'>
                        <Listbox
                          value={selectedCountry}
                          onChange={setSelectedCountry}
                        >
                          <div className='relative -mr-2'>
                            <Listbox.Button className='bg-white cursor-pointer inline-block font-semibold py-[6px] md:py-[10px] px-4 placeholder-gray-400 border border-primary rounded-[5px] -mr-1'>
                              <img
                                src={selectedCountry.flag}
                                alt={selectedCountry.name}
                                className='w-7 h-7 object-cover rounded-full mr-8 md:mr-5'
                              />
                              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                                <svg
                                  width='13'
                                  height='13'
                                  viewBox='0 0 13 13'
                                  fill='none'
                                  className='w-4 h-4 text-gray-400'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M6.05473 10.6C6.10442 10.6722 6.17091 10.7312 6.24848 10.772C6.32604 10.8128 6.41235 10.8341 6.49998 10.8341C6.58761 10.8341 6.67392 10.8128 6.75148 10.772C6.82905 10.7312 6.89554 10.6722 6.94523 10.6L11.8202 3.55837C11.8767 3.47715 11.9097 3.38202 11.9159 3.28332C11.9221 3.18461 11.9011 3.0861 11.8552 2.9985C11.8093 2.9109 11.7402 2.83755 11.6556 2.78642C11.5709 2.73529 11.4739 2.70834 11.375 2.7085H1.62498C1.52631 2.7089 1.42962 2.7362 1.34531 2.78745C1.26099 2.8387 1.19224 2.91197 1.14646 2.99937C1.10067 3.08677 1.07957 3.185 1.08543 3.28349C1.09129 3.38199 1.1239 3.47702 1.17973 3.55837L6.05473 10.6Z'
                                    fill='#C4C4C4'
                                  />
                                </svg>
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave='transition ease-in duration-100'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Listbox.Options className='absolute z-50 max-w-xs py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                {countries?.map((country, countryIdx) => (
                                  <Listbox.Option
                                    key={countryIdx}
                                    className={({ active }) =>
                                      `${
                                        active
                                          ? 'text-amber-900 bg-secondary-alternative/20'
                                          : 'text-gray-900'
                                      }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={country}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`${
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
                                          } block truncate`}
                                        >
                                          {country.name}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`${
                                              active
                                                ? 'text-amber-600'
                                                : 'text-amber-600'
                                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                          >
                                            <CheckIcon
                                              className='w-5 h-5'
                                              aria-hidden='true'
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                        <input
                          id='phone'
                          type='tel'
                          className='w-full focus:!border-primary bg-white inline-block font-normal py-2 md:py-3 px-4 pl-5 placeholder-gray-400 border border-primary rounded-[5px]'
                          placeholder='Enter phone number'
                          // {...register('phone', {
                          //   required: {
                          //     value: true,
                          //     message: 'Phone numbers are required!',
                          //   },
                          //   pattern: {
                          //     value: /^([0-9\(\)\/\+ \-]*)$/,
                          //     message: 'Must be a valid phone number',
                          //   },
                          // })}
                        />
                      </div>
                      {/* <p className='mt-2 text-red-400 font-light text-sm h-4'>
                        {errors?.phone?.message}
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(TextInvitesPage);
