

import { useState } from 'react';
import styles from './portfolio.module.css';
import All from './All';
import { AnimatePresence, motion } from 'framer-motion';
import WebDesign from './webDesign';
import AppDesign from './AppDesign';
import Logo from './Logo';
import Brand from './Brand';
import Graphics from './Graphics';
import Slider from 'react-slick';


function Portfolio() {

  const { taps } = styles;

  const [activeTap, setActiveTap] = useState(0);

  const tapsButtons = [
    'الكل',
    'تصميم المواقع',
    'تصميم التطبيقات',
    'لوجو',
    'بناء الهوية',
    'الرسوم المتحركة',
  ]


  const renderContent = () => {
    switch (activeTap) {
      case 0:
        return <All />
          ;
      case 1:
        return <WebDesign />;
      case 2:
        return <AppDesign />;
      case 3:
        return <Logo />;
      case 4:
        return <Brand />;
      case 5:
        return <Graphics />;
      default:
        return null;
    }
  };

  var settings = {
    arrow: false,
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    // rtl: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        // infinite: false,
        // arrows: false,
        swipeToSlide: true,
        // rtl: true,
      }
    }]

  };


  return (
    <div id='portfolio' className="md:px-48 px-5 my-10 overflow-x-hidden">
      <div className="">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            أعمالنا السابقة
          </h2>


          <div className={taps}>
            <Slider className='' {...settings}>
              {
                tapsButtons.map((button, index) =>
                  <button
                    onClick={() => {
                      setActiveTap(index)
                    }}
                    className={`${index == activeTap ? 'border-b-2 border-theme text-theme' : 'text-gray-500'} `}
                    key={index}>
                    {button}
                  </button>
                )
              }
            </Slider>

          </div>

        </div>
        <motion.div className="grid lg:grid-cols-3 items-start gap-10 min-h-[300px] mt-10">


          <AnimatePresence>
            {renderContent()}
          </AnimatePresence>




        </motion.div>




      </div>


    </div>
  )
}

export default Portfolio