import { Heading } from "@components/shared";
import { Dialog, Transition } from "@headlessui/react";
import { createPrivetRegistry } from "@services/Registry/privetRegistry";
import { Fragment, useRef, useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useCopyClipboard from "react-use-clipboard";
import Image from "next/image";
import toast from "react-hot-toast";
const SharableModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  function closeModal() {
    setIsModalOpen(false);
  }
  const { mutateAsync, isLoading } = useMutation(createPrivetRegistry);

  const [superlink, setSuperlink] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`
  );
  const [websitelink, setWebsitelink] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`
  );
  const [giftAndRegistry, setGiftAndRegistry] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/giftAndRegistry`
  );
  const [address, setAddress] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/address`
  );
  const [event, setEvent] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/event`
  );
  const [linkShortener, setLinkShortener] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/linkShortener`
  );
  const [isCopied, setCopied] = useCopyClipboard(superlink, {
    successDuration: 1500,
  });
  const [isWebsite, setIsWebsite] = useCopyClipboard(websitelink, {
    successDuration: 1500,
  });
  const [isGiftAndWebsite, setIsGiftAndWebsite] = useCopyClipboard(
    giftAndRegistry,
    {
      successDuration: 1500,
    }
  );
  const [isAddress, setIsAddress] = useCopyClipboard(address, {
    successDuration: 1500,
  });
  const [isEvent, setIsEvent] = useCopyClipboard(event, {
    successDuration: 1500,
  });
  const [isLinkShortener, setIsLinkShortener] = useCopyClipboard(
    linkShortener,
    {
      successDuration: 1500,
    }
  );

  isCopied && toast.success("Supper Link copied!");
  isWebsite && toast.success("Website Link copied!");
  isGiftAndWebsite && toast.success("Gift Cards & Registry Link copied!");
  isAddress && toast.success("We Need Your Address Link copied!");
  isEvent && toast.success("Event Details Link copied!");
  isLinkShortener && toast.success("Shortener Link copied!");

  const handleSubmitSuperlink = () => {
    setCopied();
    setIsModalOpen(false);
  };
  const handleWebsite = () => {
    setIsWebsite();
    setIsModalOpen(false);
  };
  const handleGiftAndWebsite = () => {
    setIsGiftAndWebsite();
    setIsModalOpen(false);
  };
  const handleSubmitAddress = () => {
    setIsAddress();
    setIsModalOpen(false);
  };
  const handleSubmitEvent = () => {
    setIsEvent();
    setIsModalOpen(false);
  };
  const handleSubmitLinkShortener = () => {
    setIsLinkShortener();
    setIsModalOpen(false);
  };

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
                            placeholder={`${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`}
                            // onClick={setCopied}
                            onChange={(e) => setSuperlink(e.target.value)}
                          />
                          <button
                            onClick={handleSubmitSuperlink}
                            className="absolute right-1 border-l-2 items-center justify-center px-3 py-2 bg-[#ffffff] top-1"
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
                            // onClick={setCopied}
                            onChange={(e) => setWebsitelink(e.target.value)}
                          />
                          <button
                            onClick={handleWebsite}
                            className="absolute right-1 border-l-2 items-center justify-center px-3 py-2 bg-[#ffffff] top-1"
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
                            // onClick={setCopied}
                            onChange={(e) => setGiftAndRegistry(e.target.value)}
                          />
                          <button
                            onClick={handleGiftAndWebsite}
                            className="absolute right-1 border-l-2 items-center justify-center px-3 py-2 bg-[#ffffff] top-1"
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
                            // onClick={setCopied}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                          <button
                            onClick={handleSubmitAddress}
                            className="absolute right-1 border-l-2 items-center justify-center px-3 py-2 bg-[#ffffff] top-1"
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
                            // onClick={setCopied}
                            onChange={(e) => setIsEvent(e.target.value)}
                          />
                          <button
                            onClick={handleSubmitEvent}
                            className="absolute right-1 border-l-2 items-center justify-center px-3 py-2 bg-[#ffffff] top-1"
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
                            // onClick={setCopied}
                            onChange={(e) => setEvent(e.target.value)}
                          />
                          <button
                            onClick={handleSubmitLinkShortener}
                            className="absolute right-1 border-l-2 items-center justify-center px-3 py-2 bg-[#ffffff] top-1"
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
