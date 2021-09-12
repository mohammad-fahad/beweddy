import { LinkButton, Heading } from "@components/shared";
import { LinkIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, Fragment } from "react";

const registries = [
  {
    id: 1,
    title: "Amazon Wedding Registry",
    link: "https://github.com/muttakinhasib",
    image: "/images/registries/Amazon.png",
  },
  {
    id: 2,
    title: "Bed Bath & Beyond",
    buttonText: "Link",
    link: "https://github.com/muttakinhasib",
    image: "/images/registries/bbbLogo.png",
  },
  {
    id: 3,
    title: "Target Wedding Registry",
    buttonText: "Link",
    link: "https://github.com/muttakinhasib",
    image: "/images/registries/target.png",
  },
  {
    id: 4,
    title: "Bass Pro Shops",
    buttonText: "Link",
    link: "https://github.com/muttakinhasib",
    image: "/images/registries/bass-pro-shops.png",
  },
];

const Registries = () => {
  const [pushItemTo, setPushItemTo] = useState(0);
  const [col, setCol] = useState(4);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltip, setTooltip] = useState({});
  const [selected, setSelected] = useState(null);

  const isLargeDevice = useMediaQuery("only screen and (min-width: 992px)");
  const isMediumDevice = useMediaQuery("only screen and (max-width: 991px)");
  const isSmallDevice = useMediaQuery("only screen and (max-width: 767px)");

  useEffect(() => {
    if (isSmallDevice) {
      return setCol(2);
    }
    if (isMediumDevice) {
      setCol(3);
    }
    if (isLargeDevice) {
      setCol(4);
    }
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  const handleTooltip = (index) => {
    const itemRowNumber = Math.ceil(index / col);
    setPushItemTo(itemRowNumber * col - index + index);
    setShowTooltip(true);
    setSelected(index - 1);
  };

  return (
    <div className="bg-[#FCFCFC] border-t-[5px] border-primary min-h-screen relative">
      <div className="container py-32 ">
        <h2 className="pb-8 mx-auto text-4xl text-center capitalize commonTitle1">
          Link & Sync Your Gift Registries <br /> All In One Place!
          
        </h2>
        <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-[#F9D1DE] mt-6" />
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1193px] mx-auto w-full">
          {registries?.map((registry) => (
            <div
              key={registry.id}
              className="p-4 max-w-[280px] bg-white border-4 border-gray-200 hover:border-primary transition duration-300 w-full mx-auto"
            >
              <div
                className={`border-2 border-primary flex items-center justify-center h-[140px] w-full rounded-[10px] transition duration-300 relative group p-3`}
              >
                <Link href={registry.link}>
                  <a
                    target="_blank"
                    className="max-w-[273px] rounded-lg flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 absolute inset-0 z-50 group-hover:bg-black/50"
                  >
                    <LinkIcon className="w-8 h-8 text-white" />
                  </a>
                </Link>
                <div>
                  <Image
                    width={200}
                    height={80}
                    src={registry.image || "/images/registries/Amazon.png"}
                  />
                </div>
              </div>

              <div className="flex flex-col py-4 text-center">
                <h3 className="text-lg font-semibold font-inter">
                  {registry.title}
                </h3>
                <div>
                  <Link href="/create-website">
                    <button className="py-2 inline-block px-8 border-gray-900 border-2 rounded-[5px] mt-5 hover:bg-black transition duration-300 hover:text-white font-inter font-bold">
                      Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute z-20 mx-auto transition duration-200 left-2/4 -translate-x-2/4 -bottom-3 hover:scale-110">
          <Link href="/create-website">
            <a className="py-3 text-base bg-[#ffffff] border-2 px-20 whitespace-nowrap md:px-28 border-primary text-primary rounded-3xl">
              See More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registries;
