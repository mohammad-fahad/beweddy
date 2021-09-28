import { Heading } from "@components/shared";
import { Dialog, Transition } from "@headlessui/react";
import { createPrivetRegistry } from "@services/Registry/privetRegistry";
import { Fragment, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useCopyClipboard from "react-use-clipboard";
import Image from "next/image";
const SharableModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  function closeModal() {
    setIsModalOpen(false);
  }
  const { mutateAsync, isLoading } = useMutation(createPrivetRegistry);

  const [value, setValue] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`
  );
  const [isCopied, setCopied] = useCopyClipboard(value, {
    successDuration: 1500,
  });
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
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
              <div className="inline-block w-full p-10 mt-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl max-w-[900px] rounded-2xl">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="justify-self-center md:justify-self-stretch">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <Heading h3 className="!font-medium !text-lg">
                          Your Supper Link
                        </Heading>
                        <div className="relative max-w-[330px] w-full">
                          <input
                            type="text"
                            className="max-w-[330px] w-full py-3 px-5 text-center text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                            placeholder="www.bw.link/123"
                            onClick={setCopied}
                          />
                          <button
                            onClick={setCopied}
                            className="absolute right-1 items-center justify-center px-5 py-2 bg-[#ffffff] my-1"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                      <div className="max-w-[330px]">
                        <Image
                          width={330}
                          height={660}
                          // src="/images/feature-mobile.png"
                          src="/images/linkpage.png"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full justify-self-center md:justify-self-stretch">
                    <div className="space-y-10">
                      <div className="space-y-3">
                        <Heading h3 className="!font-medium !text-lg">
                          Your Website Link
                        </Heading>
                        <div className="relative w-full">
                          <input
                            type="text"
                            className=" text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                            placeholder="www.beweddy.com/nateandash"
                            onClick={setCopied}
                          />
                          <button
                            onClick={setCopied}
                            className="absolute right-1 items-center justify-center px-5 py-2 bg-[#ffffff] my-1"
                          >
                            Copy
                          </button>
                        </div>
                        <a
                          href="#"
                          className="block text-sm font-medium capitalize font-inter hover:underline"
                        >
                          Add Your Custom Domain
                        </a>
                      </div>
                      <div className="space-y-3">
                        <Heading h3 className="!font-medium !text-lg">
                          Gift Cards & Registry Link
                        </Heading>
                        <div className="relative w-full">
                          <input
                            type="text"
                            className=" text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                            placeholder="www.beweddy.com/nateandash/giftcards"
                            onClick={setCopied}
                          />
                          <button
                            onClick={setCopied}
                            className="absolute right-1 items-center justify-center px-5 py-2 bg-[#ffffff] my-1"
                          >
                            Copy
                          </button>
                        </div>
                        <a
                          href="#"
                          className="block text-sm font-medium capitalize font-inter hover:underline"
                        >
                          Add Gift Cards & Build Registry
                        </a>
                      </div>
                      <div className="space-y-3">
                        <Heading h3 className="!font-medium !text-lg">
                          We Need Your Address Link
                        </Heading>
                        <div className="relative w-full">
                          <input
                            type="text"
                            className=" text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                            placeholder="www.beweddy.com/nateandash/needyouraddress"
                            onClick={setCopied}
                          />
                          <button
                            onClick={setCopied}
                            className="absolute right-1 items-center justify-center px-5 py-2 bg-[#ffffff] my-1"
                          >
                            Copy
                          </button>
                        </div>
                        <a
                          href="#"
                          className="block text-sm font-medium capitalize font-inter hover:underline"
                        >
                          Manage RSVPs
                        </a>
                      </div>
                      <div className="space-y-3">
                        <Heading h3 className="!font-medium !text-lg">
                          Event Details
                        </Heading>
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                            placeholder="www.beweddy.com/nateandash/needyouraddress"
                            onClick={setCopied}
                          />
                          <button
                            onClick={setCopied}
                            className="absolute right-1 items-center justify-center px-5 py-2 bg-[#ffffff] my-1"
                          >
                            Copy
                          </button>
                        </div>
                        <a
                          href="#"
                          className="block text-sm font-medium capitalize font-inter hover:underline"
                        >
                          Manage Event Details
                        </a>
                      </div>
                      <div className="space-y-3">
                        <Heading h3 className="!font-medium !text-lg">
                          Link Shortener
                        </Heading>
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                            placeholder="Add link"
                            onClick={setCopied}
                          />
                          <button
                            onClick={setCopied}
                            className="absolute right-1 items-center justify-center px-5 py-2 bg-[#ffffff] my-1"
                          >
                            Copy
                          </button>
                        </div>
                        <a
                          href="#"
                          className="block text-sm font-medium capitalize font-inter hover:underline"
                        >
                          Shorten the link.
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SharableModal;
