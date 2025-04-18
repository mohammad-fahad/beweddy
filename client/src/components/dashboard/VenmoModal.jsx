import { attemptUpdateUserProfile } from "@features/user/userActions";
import { Dialog, Transition } from "@headlessui/react";
import { createPrivetRegistry } from "@services/Registry/privetRegistry";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";

const VenmoModal = ({ isVenmoModalOpen, setIsVenmoModalOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  function closeModal() {
    setIsVenmoModalOpen(false);
  }

  const { handleSubmit, register } = useForm({ mode: "all" });
  const { mutateAsync, isLoading } = useMutation(createPrivetRegistry);
  const onSubmit = async (data) => {
    data.image = "https://i.ibb.co/Zxsf0yQ/venmo.png";
    data.description =
      "What Is Venmo? Venmo is a peer-to-peer (P2P) payment app available on iPhones and Android phones that allows for the quick and easy exchange of money directly between individuals. Founded in 2009, Venmo began as a text message-based payment delivery system.";
    setIsVenmoModalOpen(false);
    await mutateAsync(
      { payload: data, token: user?.token },
      {
        onSuccess: () => {
          dispatch(attemptUpdateUserProfile({ refetch: true }));
        },
      }
    );
  };

  return (
    <>
      <Transition appear show={isVenmoModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-primary/40" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 mt-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h4"
                  className="text-lg font-medium leading-6 text-gray-900 xs:text-xl sm:text-2xl"
                >
                  Connect Your Venmo
                </Dialog.Title>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/registries/venmo__.png"
                    width={200}
                    height={100}
                    objectFit="contain"
                    loading="lazy"
                  />
                </div>
                <form
                  className="space-y-2 sm:mt-5 xs:space-y-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium md:text-base md:font-semibold"
                    >
                      Venmo Username
                    </label>
                    <input
                      id="title"
                      type="text"
                      className="text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px]"
                      placeholder="Enter Venmo User Name"
                      {...register("title", {
                        required: {
                          value: true,
                          message: "Registry name is required!",
                        },
                      })}
                    />
                  </div>
                  {/* <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="image"
                      className="text-sm font-medium md:text-base md:font-semibold"
                    >
                      Venmo Logo
                    </label>
                    <div>
                      <Image
                        src="https://i.ibb.co/V9yxT0p/images.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>

                    <input
                      id="image"
                      type="text"
                      className="text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px]"
                      placeholder="Enter Company Logo link here"
                      {...register("image", {
                        required: {
                          value: false,
                          message: "Image link is required!",
                        },
                        pattern: {
                          value:
                            /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
                          message: "Link is not valid",
                        },
                      })}
                    />
                  </div> */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="link"
                      className="text-sm font-medium md:text-base md:font-semibold"
                    >
                      Venmo Link
                    </label>

                    <input
                      id="link"
                      type="text"
                      className="text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px]"
                      placeholder="Enter your Venmo link"
                      {...register("link", {
                        required: {
                          value: true,
                          message: "Venmo link is required!",
                        },
                        pattern: {
                          value:
                            /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
                          message: "Link is not valid",
                        },
                      })}
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-2 border-gray-100 rounded-md hover:bg-gray-100 "
                      onClick={closeModal}
                    >
                      cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition duration-300 border-2 rounded-md bg-primary border-primary hover:bg-white hover:text-primary"
                    >
                      Connect
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default VenmoModal;
