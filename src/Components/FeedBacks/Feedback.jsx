
import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import world from '../../assets/WorldMap.png';
import person from '../../assets/person.png';

import Slider from 'react-slick';


function Feedback() {


  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={'bg-theme hover:bg-themeHovered cursor-pointer text-white absolute left-full top-1/2 p-2 -translate-x-1/2 -translate-y-1/2 rounded-full z-40'}
        // style={{...style , display: "block", background: "red" }}
        onClick={onClick}
      >
        <FaAngleRight />

      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={'bg-theme hover:bg-themeHovered cursor-pointer text-white absolute left-0 top-1/2 p-2 -translate-x-1/2 -translate-y-1/2 rounded-full z-40'}
        // style={{...style , display: "block", background: "red" }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="md:px-48 px-5 mt-20 pb-10">

      <div className="">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            آراء عملائنا
          </h2>

          <p className="text-gray-600 text-lg">
            نستمد نجاحنا من رضا عملائنا عن الخدمات التي نقدمها
          </p>
        </div>

        <div className=" md:px-20 px-5 relative mt-20 md:mt-10">
          <img src={world} className='relative z-10' alt="" />
          <div className="flex flex-col items-center absolute top-1/2 left-1/2 bg-white z-40 -translate-x-1/2 -translate-y-1/2 w-full md:w-[400px]">

            <Slider className='w-full overflow-visible  rounded-3xl border border-theme' {...settings}>

              <div className='relative rounded-3xl pt-12 px-5 '>
                <div className="relative overflow-y-visible ">
                  <img src={person} className='w-[70px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2
                ' alt="" />
                  <div className="pt-12 overflow-auto">
                    <h4 className='font-light text-xl text-center'>
                      kareem nasser
                    </h4>
                    <p className='text-center px-5 my-3 text-gray-600'>
                      شركة متميزة في خدمات التسويق الرقمي وتصميم المحتوى
                      مع خدمة عملاء رائعة تستجيب بسرعة وتلبي احتياجاتنا بفعالية
                      استفدنا كثيرًا من خبرتهم في تحسين
                    </p>


                  </div>
                </div>


              </div>
             
              <div className='relative rounded-3xl px-5 '>
                <div className="relative overflow-y-visible ">
                  <img src={person} className='w-[70px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2
                ' alt="" />
                  <div className="pt-12 overflow-auto">
                    <h4 className='font-light text-xl text-center'>
                      kareem nasser
                    </h4>
                    <p className='text-center px-5 my-3 text-gray-600'>
                      شركة متميزة في خدمات التسويق الرقمي وتصميم المحتوى
                      
                    </p>


                  </div>
                </div>


              </div>
             
              <div className='relative rounded-3xl pt-12 px-5 '>
                <div className="relative overflow-y-visible ">
                  <img src={person} className='w-[70px] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2
                ' alt="" />
                  <div className="pt-12 overflow-auto">
                    <h4 className='font-light text-xl text-center'>
                      kareem nasser
                    </h4>
                    <p className='text-center px-5 my-3 text-gray-600'>
                      شركة متميزة في خدمات التسويق الرقمي وتصميم المحتوى
                      مع خدمة عملاء رائعة تستجيب بسرعة وتلبي احتياجاتنا بفعالية
                      استفدنا كثيرًا من خبرتهم في تحسين
                    </p>


                  </div>
                </div>


              </div>
             


            </Slider>

          </div>
        </div>


      </div>


    </div>
  )
}

export default Feedback