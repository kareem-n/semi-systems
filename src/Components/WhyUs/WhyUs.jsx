
import { FaCheck, FaCreativeCommons } from 'react-icons/fa'

import topLeft from '../../assets/TopLift.png'
import DownRight from '../../assets/DownRight.png'
import VectorGreen from '../../assets/VectorGreen.png'
import VectorPurple from '../../assets/VectorPurple.png'
import VectorYellow from '../../assets/VectorYellow.png'
import { MdCloudDone, MdOutlineStarRate } from 'react-icons/md'
import { FaRightLeft } from 'react-icons/fa6'


function WhyUs() {
    return (
        <div className="px-48 py-20 my-20">

            <div className="flex flex-row-reverse items-center">
                <div className="w-1/2">
                    <img src={topLeft} alt="" />
                </div>

                <div className="w-1/2 ">
                    <h2 className='font-bold text-4xl'>
                        <div className="">لماذا
                        </div>
                        يجب أن تختارنا؟
                    </h2>

                    <div className=" flex items-start flex-col gap-x-0 gap-y-6 mt-5">

                        <div className="bg-white w-[400px] shadow-lg rounded-2xl flex items-center gap-x-5 px-6 py-4">
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
                        <div className="bg-white w-[400px] shadow-lg rounded-2xl flex items-center gap-x-5 px-6 py-4">
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
                        <div className="bg-white w-[400px] shadow-lg rounded-2xl flex items-center gap-x-5 px-6 py-4">
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

                        <button className='bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-lg text-lg'>
                            استشارة مجانيه
                        </button>

                    </div>


                </div>
            </div>
            <div className="flex items-center gap-x-10 mt-20">

                <div className="w-1/2">
                    <img src={DownRight} alt="" />
                </div>

                <div className="w-1/2 ">

                    <h2 className='text-5xl font-bold'>
                        <span className='bg-orange-500/30 px-3'>نحقق</span> لك النجاح الرقمي <br />
                        في أي وقت, ومن أي مكان
                    </h2>
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

                    <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5">
                        <div className="bg-white shadow-xl rounded-lg px-4 py-3 flex items-center gap-x-5">
                            <FaCheck color='green' />
                            <p className='font-bold pl-5'>
                                إدارة بياناتك بسهولة
                            </p>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg px-4 py-3 flex items-center gap-x-5">
                            <FaCheck color='green' />
                            <p className='font-bold pl-5'>
                                دائمًا على اتصال
                            </p>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg px-4 py-3 flex items-center gap-x-5">
                            <FaCheck color='green' />
                            <p className='font-bold pl-5'>
                                تعزيز العمل الجماعي
                            </p>
                        </div>
                        <div className="bg-white shadow-xl rounded-lg px-4 py-3 flex items-center gap-x-5">
                            <FaCheck color='green' />
                            <p className='font-bold pl-5'>
                                تحليلات شاملة لأداء أفضل
                            </p>
                        </div>

                        <button className='bg-orange-600 hover:bg-orange-700 text-white text-lg rounded-lg px-5 py-3 mt-5'>
                        ابدأ اليوم معنا
                        </button>



                    </div>


                </div>

            </div>



        </div>
    )
}

export default WhyUs