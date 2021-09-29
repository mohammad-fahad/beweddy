import { GlobeAltIcon, LinkIcon, PencilIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import { useSelector } from 'react-redux';

import SwiperCore, { Lazy, Autoplay } from 'swiper';
import DesktopPreview from './WebsitePreview/DesktopPreview';
import MobilePreview from './WebsitePreview/MobilePreview';
import TabPreview from './WebsitePreview/TabPreview';
SwiperCore.use([Lazy, Autoplay]);

const params = {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const WebsitePreviewContainer = ({ minimal }) => {
  const { user } = useSelector(state => state.user);
  return (
    <div
      className={`mt-10 flex flex-col justify-center space-y-10 rounded-xl ${
        // minimal ? "" : "border-4 border-secondary-alternative gradient"
        minimal ? '' : 'border-4 border-secondary-alternative gradient'
      }`}
      // style={{
      //   background: "url('/images/footer-leaf.png')",
      //   backgroundPosition: "bottom",
      //   backgroundSize: "110%",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      {!minimal && (
        <h3 className='text-3xl text-center capitalize'>
          Your wedding website preview
        </h3>
      )}
      <div className='w-full max-w-xl mx-auto'>
        <Swiper {...params}>
          <div>
            {user?.email && user?.questions?.couplePictures.length > 0 ? (
              <div>
                <DesktopPreview />
              </div>
            ) : (
              <div>
                <img
                  src='/images/wedding-laptop.png'
                  alt=''
                  // className="!h-[600px] mx-auto swiper-lazy"
                  className='sm:max-h-[400px] md:max-h-[450px] mx-auto swiper-lazy'
                />
                <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
              </div>
            )}
          </div>

          {/* <div>
            {user?.email && user?.questions?.couplePictures.length > 0 ? (
              <div>
                <MobilePreview />
              </div>
            ) : (
              <div>
                <img
                  src="/images/wedding-phone.png"
                  alt=""
                  className="!max-h-[250px] !md:max-h-[395px] mx-auto swiper-lazy"
                  // className="!h-[600px]  mx-auto swiper-lazy"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
              </div>
            )}
          </div> */}
          <div>
            {user?.email && user?.questions?.couplePictures.length > 0 ? (
              <div>
                <TabPreview />
              </div>
            ) : (
              <div>
                <img
                  src='/images/wedding-macbook.png'
                  alt=''
                  className='sm:max-h-[400px]  md:max-h-[450px] mx-auto swiper-lazy'
                  // className="!h-[600px] mx-auto swiper-lazy"
                />
                <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
              </div>
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default WebsitePreviewContainer;

// import { GlobeAltIcon, LinkIcon, PencilIcon } from "@heroicons/react/outline";
// import Link from "next/link";
// import Swiper from "react-id-swiper";

// import SwiperCore, { Lazy, Autoplay } from "swiper";
// import { useSelector } from 'react-redux';
// SwiperCore.use([Lazy, Autoplay]);

// const params = {
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
// };

// const WebsitePreviewContainer = ({ minimal }) => {
//   return (
//     <div
//       className={`mt-10 flex flex-col justify-center space-y-10 rounded-xl ${
//         minimal ? "" : "border-4 border-secondary-alternative gradient"
//       }`}
//       style={{
//         background: "url('/images/footer-leaf.png')",
//         backgroundPosition: "bottom",
//         backgroundSize: "110%",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {!minimal && (
//         <h3 className="text-3xl text-center capitalize">
//           Your wedding website preview
//         </h3>
//       )}
//       <div className="w-full max-w-xl mx-auto">
//         <Swiper {...params}>
//           <div>
//             <img
//               src="/images/wedding-laptop.png"
//               alt=""
//               className="md:max-h-[444px] mx-auto swiper-lazy"
//             />
//             <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
//           </div>
//           <div>
//             <img
//               src="/images/wedding-phone.png"
//               alt=""
//               className="max-h-[250px] md:max-h-[395px] mx-auto swiper-lazy"
//             />
//             <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
//           </div>
//           <div>
//             <img
//               src="/images/wedding-macbook.png"
//               alt=""
//               className="max-h-[250px] md:max-h-[444px] mx-auto swiper-lazy"
//             />
//             <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
//           </div>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default WebsitePreviewContainer;
