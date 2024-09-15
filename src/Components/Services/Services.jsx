
import styles from './services.module.css';

import roket from '../../assets/Roket.png';
import vectorBlue from '../../assets/VectorBlue.png';
import vectorGreen from '../../assets/VectorGreen.png';
import vectorRed from '../../assets/VectorRed.png';
import vectorPink from '../../assets/VectorPink.png';
import vectorYellow from '../../assets/VectorYellow.png';
import vectorPurple from '../../assets/VectorPurple.png';
import servicesStars from '../../assets/servicesStars.png';

import { CgWebsite } from "react-icons/cg";
import { SiMaterialdesign, SiSimpleanalytics } from "react-icons/si";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { IoShareSocialOutline } from "react-icons/io5";


import { motion } from 'framer-motion'
import Reveal from '../Reveal/Reveal';





function Services() {


  const { line } = styles;

  return (
    <div id='services' className="px-48 mb-20 relative z-10">
      <div className="absolute top-0 right-0 -z-10">
        <img src={roket} alt="" />
      </div>

      <div className="">
        <div className="text-center">
          <Reveal>
            <h2 className='text-4xl font-bold'>خدماتنا</h2>
          </Reveal>

          <Reveal>
            <p className='text-lg mt-3 text-gray-600'>
              <span className="block">
                الحل الأمثل لأعمالك
              </span>
              <span className="block">
                &quot;حقق أهدافك التسويقية وازدهر بفضل شراكتك معنا، حيث نقدم حلولاً مبتكرة تدفع بنجاح علامتك التجارية إلى الأمام.&quot;
              </span>
            </p>
          </Reveal>

        </div>

        <div className="mt-10 grid grid-cols-3 gap-10">
          {/*  */}
          <Reveal>
            <motion.div
              initial='start'
              whileHover='end'

              className="bg-white border-2 border-transparent hover:border-theme/30 transition-all col-span-1 shadow-xl  py-8 rounded-3xl">
              <div className="flex items-center justify-center relative z-10">
                <img src={vectorBlue} className='blur-md absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-16' alt="" />
                <motion.div
                  variants={{
                    start: { scale: 1 },
                    end: { scale: 1.2 },
                  }}
                  transition={{
                    duration: 0.2
                  }}
                >
                  <CgWebsite
                    size={60}
                  />
                </motion.div>

              </div>
              <div className="text-center mt-8 flex flex-col items-center px-10">
                <h3 className='text-xl font-bold'>تصميم المواقع الإلكترونية</h3>
                <div className={line}></div>

                <p className=''>
                  نقوم بتصميم وبرمجة المواقع التعريفية
                  والخدمية والمتاجر الإلكترونية
                </p>

              </div>
            </motion.div>
          </Reveal>

          {/*  */}
          <Reveal>
            <motion.div
              initial='start'
              whileHover='end'
              className="bg-white border-2 border-transparent hover:border-theme/30 col-span-1 shadow-xl   py-8 rounded-3xl">
              <div className="flex items-center justify-center relative z-10">
                <img src={vectorGreen} className='blur-md absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-16' alt="" />
                <motion.div
                  variants={{
                    start: { scale: 1 },
                    end: { scale: 1.2 },
                  }}
                  transition={{
                    duration: 0.2
                  }}
                >
                  <SiMaterialdesign size={60} />
                </motion.div>
              </div>
              <div className="text-center mt-8 flex flex-col items-center px-10">
                <h3 className='text-xl font-bold'>تصميم الهوية التجارية</h3>
                <div className={line}></div>

                <p className=''
                >نبتكر هوية بصرية مميزة تعزز حضور
                  علامتك التجارية وتلفت الانتباه
                </p>

              </div>
            </motion.div>
          </Reveal>
          {/*  */}

          <Reveal>


            <motion.div
              initial='start'
              whileHover='end'
              className="bg-white border-2 border-transparent hover:border-theme/30 col-span-1 shadow-xl py-8 rounded-3xl">
              <div className="flex items-center justify-center relative z-10">
                <img src={vectorRed} className='blur-md absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-16' alt="" />
                <motion.div
                  variants={{
                    start: { scale: 1 },
                    end: { scale: 1.2 },
                  }}
                  transition={{
                    duration: 0.2
                  }}
                >
                  <MdOutlinePhoneAndroid size={60} />
                </motion.div>
              </div>
              <div className="text-center mt-8 flex flex-col items-center px-10">
                <h3 className='text-xl font-bold'>
                  تصميم تطبيقات الجوال
                </h3>
                <div className={line}></div>

                <p className=''
                >
                  تقوم بتصميم وبرمجة تطبيقات الجوال مهما
                  كانت الفكرة صغيرة أم كبيرة
                </p>

              </div>
            </motion.div>
            {/*  */}
          </Reveal>

          <Reveal>


            <motion.div
              initial='start'
              whileHover='end'
              className="bg-white border-2 border-transparent hover:border-theme/30 shadow-xl py-8 rounded-3xl">
              <div className="flex items-center justify-center relative z-10">
                <img src={vectorPink} className='blur-md absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-16' alt="" />
                <motion.div
                  variants={{
                    start: { scale: 1 },
                    end: { scale: 1.2 },
                  }}
                  transition={{
                    duration: 0.2
                  }}
                >
                  <SiSimpleanalytics size={60} />

                </motion.div>
              </div>
              <div className="text-center mt-8 flex flex-col items-center px-10">
                <h3 className='text-xl font-bold'>
                  إدارة الحملات التسويقية
                </h3>
                <div className={line}></div>

                <p className=''>
                  نصمم حملات مستهدفة لتحقيق أقصى تأثير
                  وزيادة العائد على الاستثمار
                </p>

              </div>
            </motion.div>
            {/*  */}
          </Reveal>

          <Reveal>


            <motion.div
              initial='start'
              whileHover='end'

              className="bg-white border-2 border-transparent hover:border-theme/30 shadow-xl  py-8 rounded-3xl">
              <div className="flex items-center justify-center relative z-10">
                <img src={vectorYellow} className='blur-md absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-16' alt="" />
                <motion.div
                  variants={{
                    start: { scale: 1 },
                    end: { scale: 1.2 },
                  }}
                  transition={{
                    duration: 0.2
                  }}
                >
                  <TbWorldSearch size={60} />
                </motion.div>
              </div>
              <div className="text-center mt-8 flex flex-col items-center px-10">
                <h3 className='text-xl font-bold'>
                  تحسين محركات البحث
                </h3>
                <div className={line}></div>

                <p className=''>
                  نرفع ترتيب موقعك في نتائج البحث
                  لزيادة الزيارات والمبيعات.
                </p>

              </div>
            </motion.div>
            {/*  */}
          </Reveal>

          <Reveal>


            <motion.div
              initial='start'
              whileHover='end'
              className="bg-white border-2 border-transparent hover:border-theme/30 shadow-xl py-8 rounded-3xl">
              <div className="flex items-center justify-center relative z-10">
                <img src={vectorPurple} className='blur-md absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-16' alt="" />
                <motion.div
                  variants={{
                    start: { scale: 1 },
                    end: { scale: 1.2 },
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="">

                  <IoShareSocialOutline size={60} />
                </motion.div>
              </div>
              <div className="text-center mt-8 flex flex-col items-center px-10">
                <h3 className='text-xl font-bold'>
                  إدارة حسابات التواصل الاجتماعي
                </h3>
                <div className={line}></div>

                <p className=''>
                  نضع خططًا تسويقية مبتكرة وننشر محتوى جذاب
                  لزيادة التفاعل وبناء جمهورك.
                </p>

              </div>
            </motion.div>
          </Reveal>



        </div>
      </div>

      <div className="absolute top-full left-0 translate-x-1/2">
        <img src={servicesStars} alt="" />
      </div>





    </div>
  )
}

export default Services