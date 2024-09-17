
import { FaCheck, FaCreativeCommons } from 'react-icons/fa'

import topLeft from '../../assets/TopLift.png'
import DownRight from '../../assets/DownRight.png'
import VectorGreen from '../../assets/VectorGreen.png'
import VectorPurple from '../../assets/VectorPurple.png'
import VectorYellow from '../../assets/VectorYellow.png'
import { MdCloudDone, MdOutlineStarRate } from 'react-icons/md'
import { FaRightLeft } from 'react-icons/fa6'
import Reveal from '../Reveal/Reveal'


function WhyUs() {
    return (
        <div className="md:px-48 px-5 py-20 my-20">

            <div className="flex flex-wrap md:flex-nowrap gap-y-10 flex-row-reverse items-center">

                <div className="md:w-1/2">
                    <Reveal>
                        <img src={topLeft} alt="" />
                    </Reveal>
                </div>

                <div className="md:w-1/2 w-full">
                    <Reveal>
                        <h2 className='font-bold text-4xl'>
                            <span className="block">لماذا
                            </span> يجب أن 
                            <span className='bg-green-500 text-white px-3 mx-1 rounded-lg'> تختارنا؟ </span> 
                        </h2>
                    </Reveal>


                    <div className=" flex md:items-start flex-col gap-x-0 gap-y-6 mt-5">
                        <Reveal>
                            <div className="bg-white md:w-[400px]  shadow-lg rounded-2xl flex items-center gap-x-5 px-6 py-4">
                                <div className="relative w-[60px] h-[50px] flex justify-center items-center">
                                    <img src={VectorYellow} className='absolute inset-0' alt="" />
                                    <div className="relative text-yellow-500">
                                        <MdOutlineStarRate size={50} />

                                    </div>
                                </div>
                                <h3 className="text-lg font-bold pl-10">
                                    وكالة رائدة في التسويق الرقمي
                                </h3>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="bg-white md:w-[400px] shadow-lg rounded-2xl flex items-center gap-x-5 px-6 py-4">
                                <div className="relative w-[60px] h-[50px] flex items-center justify-center">
                                    <img src={VectorGreen} className='absolute inset-0 ' alt="" />
                                    <div className="relative text-green-200">
                                        <MdCloudDone size={40} />

                                    </div>
                                </div>
                                <h3 className="text-lg font-bold pl-10">
                                    أعلى معدلات النجاح
                                </h3>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="bg-white md:w-[400px] shadow-lg rounded-2xl flex items-center gap-x-5 px-6 py-4">
                                <div className="relative w-[60px] h-[50px] flex items-center justify-center overflow-hidden">
                                    <img src={VectorPurple} className='absolute inset-0' alt="" />
                                    <div className="relative text-purple-300">
                                        <FaCreativeCommons size={40} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold pl-10">
                                    حلول تسويقية مبتكرة
                                </h3>
                            </div>
                        </Reveal>




                        <Reveal>
                            <button className='bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-lg text-lg'>
                                استشارة مجانيه
                            </button>
                        </Reveal>


                    </div>


                </div>
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-y-14 gap-x-10 mt-20">

                <div className="md:w-1/2 w-full">
                    <Reveal>
                        <img src={DownRight} alt="" />

                    </Reveal>
                </div>

                <div className="md:w-1/2 w-full ">


                    <Reveal>
                        <h2 className='text-5xl font-bold'>
                            <span className='bg-orange-500/30 rounded-lg leading-normal px-3'>نحقق</span> لك النجاح الرقمي <br />
                            في أي وقت, ومن أي مكان
                        </h2>
                    </Reveal>
                    <Reveal>
                        <div className="text-lg text-gray-600">
                            <p className='mt-4 '>
                                نُقدّم استراتيجيات تسويقية مخصصة
                            </p>

                            <p>
                                ومبنية على احتياجات عملك لتحقيق أفضل النتائج
                            </p>

                            <p>
                                نعمل معك لتعزيز تواجدك الرقمي وجذب المزيد من العملاء.
                            </p>

                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-5 mt-5">
                        <Reveal>
                            <div className=" rounded-lg px-4 py-3 flex items-center gap-x-5">
                                <FaCheck color='#2057C2' />
                                <p className='font-bold pl-5'>
                                    إدارة بياناتك بسهولة
                                </p>
                            </div>
                        </Reveal>


                        <Reveal>
                            <div className=" rounded-lg px-4 py-3 flex items-center gap-x-5">
                                <FaCheck color='#2057C2' />
                                <p className='font-bold pl-5'>
                                    دائمًا على اتصال
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className=" rounded-lg px-4 py-3 flex items-center gap-x-5">
                                <FaCheck color='#2057C2' />
                                <p className='font-bold pl-5'>
                                    تعزيز العمل الجماعي
                                </p>
                            </div>
                        </Reveal>


                        <Reveal>

                            <div className=" rounded-lg px-4 py-3 flex items-center gap-x-5">
                                <FaCheck color='#2057C2' />
                                <p className='font-bold pl-5'>
                                    تحليلات شاملة لأداء أفضل
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>

                            <button
                            style={{
                                background: 'linear-gradient(180deg, #FF7241 0%, #FA4000 100%)'

                            }} className=' text-white text-lg rounded-lg px-8 py-2 mt-0'>
                                ابدأ اليوم معنا
                            </button>
                        </Reveal>





                    </div>


                </div>

            </div>



        </div>
    )
}

export default WhyUs