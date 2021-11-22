import { useEffect, useState, Fragment } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import { Button } from "@components/index";
import { useQuery } from "react-query";
import { getVenues } from "@services/Venue";
import { attemptUpdateUserProfile } from "@features/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const selectVenue = {
  _id: 1,
  name: "Sleepy Ridge",
};

export default function AddVenue() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(selectVenue);
  const [venues, setVenues] = useState([]);

  const handleVenueSubmit = () => {
    if (selectedProvider._id === "") return;
    dispatch(attemptUpdateUserProfile({ venueId: selectedProvider?._id }));
    setShowModal(false);
  };

  const { data } = useQuery("venues", getVenues);

  useEffect(() => {
    if (data) {
      setVenues(
        data
          ?.filter((item) => item.plan !== "none")
          ?.map((venue) => ({
            _id: venue._id,
            name: venue.businessName,
          }))
      );

      setSelectedProvider({ _id: data[0]?._id, name: data[0]?.businessName });
    } else {
      setVenues([selectVenue]);
      setSelectedProvider(selectVenue);
    }
  }, [data]);
  
  // ok

  return (
    <>
      {user?.role !== 'venue' && !user?.venue && (
        <button
          onClick={() => setShowModal(true)}
          className={`capitalize text-xs md:text-base font-inter font-semibold rounded-[5px] animate-bounce bg-[#FF5A79] text-[#ffffff] py-2 sm:px-3 px-1 md:px-5 flex items-center sm:space-x-3 hover:bg-secondary-primary transition duration-300 smallText`}
        >
          <span className='customLabel'>Connect Your Venue</span>
        </button>
      )}
      {showModal ? (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
            <div className='relative w-auto max-w-3xl mx-auto my-6'>
              {/*content*/}
              <div className='relative flex flex-col w-full bg-gradient-to-br from-[#FCE3EB] to-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200'>
                  <h3 className='text-3xl font-semibold'>Connect Venue</h3>
                  <button
                    className='float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative flex-auto p-6'>
                  <motion.div
                    className={`bg-gradient-to-br from-[#FCE3EB] to-white`}
                  >
                    <div className='container flex items-center justify-center '>
                      <form className='w-full'>
                        <section
                          className={`bg-white border-4 my-5 md:my-10 border-primary py-5 md:py-10 px-10 md:px-24 max-w-xl w-full mx-auto rounded-xl h-[400px]`}
                        >
                          <h2 className='pb-8 mx-auto text-[36px] text-center commonTitle'>
                            Select Your Venue
                          </h2>
                          <div className='w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary' />

                          <Listbox
                            value={selectedProvider}
                            onChange={setSelectedProvider}
                            className='w-full '
                          >
                            <div className='relative w-full mt-1'>
                              <Listbox.Button className='relative font-inter rounded-[5px] border-2 border-secondary/20 py-3 pl-5 pr-10 text-base font-semibold w-[370px]'>
                                <span className='block truncate'>
                                  {' '}
                                  {selectedProvider?.name}
                                </span>
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
                                <Listbox.Options className='absolute min-w-[370px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                  {venues?.map((provider, providerIdx) => (
                                    <Listbox.Option
                                      key={providerIdx}
                                      className={({ active }) =>
                                        `${
                                          active
                                            ? 'text-secondary bg-secondary-alternative/50'
                                            : 'text-gray-900'
                                        }
                            cursor-pointer select-none relative py-2 pl-10 pr-4 font-medium`
                                      }
                                      value={provider}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={`${
                                              selected
                                                ? 'font-semibold'
                                                : 'font-medium'
                                            } block truncate`}
                                          >
                                            {provider.name}
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
                          <div className='mt-8'>
                            <Button
                              label='Save'
                              type='button'
                              onClick={handleVenueSubmit}
                              className='!rounded-[10px] w-[178px] h-[59px]'
                            />
                          </div>
                        </section>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
        </>
      ) : null}
    </>
  );
}
