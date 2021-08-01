import { Heading, Button } from '@components/index';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

export const SentInvitation = ({ watch, register, errors }) => {
  const { query, push } = useRouter();
  const step = Number(query.step);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = async () => {
    const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
    setCountries(data);
    setSelectedCountry(data[0]);
  };

  console.log(countries);

  return (
    <div
      className={`${
        step === 7 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <Heading
        label='How would you like your invitations sent?'
        color='bg-primary'
        style={{ paddingBottom: '25px' }}
        lineStyle={{ marginBottom: '25px' }}
      />
      <h2 className='font-medium text-2xl text-center mb-8'>
        (Check all that apply)
      </h2>
      <div className='w-full max-w-md flex flex-col justify-center gap-5 mb-10'>
        <div>
          <div className='flex items-center'>
            <Listbox value={selectedCountry} onChange={setSelectedCountry}>
              <div className='relative -mr-2'>
                <Listbox.Button className='bg-white cursor-pointer inline-block font-semibold py-[10px] px-4 placeholder-gray-400 border-2 border-primary rounded-lg rounded-r-none'>
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className='w-7 h-7 object-cover rounded-full mr-4'
                  />
                  <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                    <SelectorIcon
                      className='w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute z-50 max-w-xs py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {countries.map((country, countryIdx) => (
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
                                selected ? 'font-medium' : 'font-normal'
                              } block truncate`}
                            >
                              {country.name}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? 'text-amber-600' : 'text-amber-600'
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
              className='w-56 bg-white inline-block font-normal py-3 px-4 pl-5 placeholder-gray-400 border-2 border-primary rounded-lg'
              placeholder='Enter phone number'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Phone numbers are required!',
                },
                pattern: {
                  value: /^([0-9\(\)\/\+ \-]*)$/,
                  message: 'Must be a valid phone number',
                },
              })}
            />
          </div>
          <p className='mt-2 text-red-400 font-light h-4 text-sm'>
            {errors?.phone?.message}
          </p>
        </div>
        <div className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='text_invite'
            value={true}
            defaultChecked
            className='text-primary rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('text_invite')}
          />
          <label
            htmlFor='text_invite'
            className='font-inter font-light text-lg cursor-pointer'
          >
            Text invitation 📲 <strong className='font-semibold'>(Free)</strong>
          </label>
        </div>
        <div className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='email_invite'
            value={true}
            defaultChecked
            className='text-primary rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('email_invite')}
          />
          <label
            htmlFor='email_invite'
            className='font-inter font-light text-lg cursor-pointer'
          >
            Email invitation 🖥 <strong className='font-semibold'>(Free)</strong>
          </label>
        </div>
        <div className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='mail_out_invite'
            value={true}
            className='text-primary rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('mail_out_invite')}
          />
          <label
            htmlFor='mail_out_invite'
            className='font-inter font-light text-lg cursor-pointer'
          >
            Mail out Invitation ($1.25 for prints, envelopes & postage 💌)
          </label>
        </div>
      </div>
      <div className='my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
        <Button
          label='Previews'
          className='opacity-50 !rounded-[10px]'
          onClick={() => push({ query: { step: step - 1 } })}
        />
        <Button label='Next' type='submit' className=' !rounded-[10px]' />
      </div>
    </div>
  );
};
