import React from 'react'
import PageBanner from '../../Components/pageBanner/PageBanner'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
import ContactMan from "../../assets/Call.jpg"
import { FaLocationDot } from 'react-icons/fa6';

import Reveal from '../../Components/Reveal/Reveal';

const Contact = () => {
  return (
    <div>
        <PageBanner head={"تواصل معنا"}/>
        <div className='my-20 px-48'>
            <div className='p-4 '>
            <Reveal>
              <div className='grid grid-cols-3  '>
              {/* Heading contact */}
                <div className='phone flex items-center gap-3 '>
                  <div className='phonei bg-theme p-4 text-white text-2xl'>
                  <FaPhone />
                  </div>
                  <div>
                    <h1 className='font-bold text-xl'>رقم الهاتف</h1>
                    <p className='text-gray-300'>01015816497</p>
                  </div>
                </div>

                <div className='phone flex items-center gap-3 '>
                  <div className='phonei bg-theme p-4  text-white text-2xl '>
                  <MdEmail />
                  </div>
                  <div>
                    <h1 className='font-bold text-xl'>بريد الكترونى</h1>
                    <p className='text-gray-300'>info@pivot.com</p>
                  </div>
                </div>

                <div className='phone flex items-center gap-3 '>
                  <div className='phonei bg-theme p-4 text-white text-2xl'>
                  <FaLocationDot />
                  </div>
                  <div>
                    <h1 className='font-bold text-xl'>عنوان</h1>
                    <p className='text-gray-300'>المملكة السعودية - الرياض </p>
                  </div>

                </div>
              </div>
              </Reveal>


              {/* Form Contact */}
              <Reveal>
              <div className='pt-20 flex flex-wrap  '>
              <div className='image w-1/3 mt-3 '>
                  <img src={ContactMan}alt="" className='w-full'/>
                </div>
                
                <div className='cont w-2/3'>
                <div className=" flex flex-col items-center ">
                  <div className="w-2/3 ">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-xl font-bold">الإسم :</label>

                      <input
                      type="text"
                      placeholder="اكتب الاسم هنا"
                      className="mt-1 block w-full px-3 py-2 border rounded-2xl focus:outline-themeHovered"/>
                      </div>
            <div>
              <label className="block text-xl font-bold"> البريد الالكتروني :</label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="mt-1 block w-full px-3 py-2 border rounded-2xl focus:outline-themeHovered"
              />
            </div>
            <div>
              <label className="block text-xl font-bold">رقم الهاتف :</label>
              <input
                type="tel"
                placeholder="رقم الجوال"
                className="mt-1 block w-full px-3 py-2 border rounded-2xl focus:outline-themeHovered"
                
              />
            </div>
            <div>
              <label className="block text-xl font-bold">الرسالة :</label>
              <textarea
                placeholder="اكتب رسالتك هنا"
                className="mt-1 block w-full px-3 py-2 border rounded-2xl focus:outline-themeHovered"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-2xl">
              أرسل رسالة
            </button>
          </form>
        </div>
      </div>
                </div>
              </div>
              </Reveal>
            </div>
        </div>
        {/* MAP */}
        <div className="map  px-32 pb-24 ">
               <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mansoura+(Zahy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
              </div>

    </div>
    
    
  );
}

export default Contact;