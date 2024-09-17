import dcoin from '../../assets/dcoin.png'
import ethereum from '../../assets/ethereum-02.png.png'
import circle from '../../assets/circle-01.png'
import x from '../../assets/x.png'


function Offer() {
    return (
        <div className="md:px-48 px-5 py-14 relative">


            <div className="relative  rounded-3xl md:p-20 py-10 flex flex-col items-center">
                <div className="text-4xl md:text-6xl flex flex-row-reverse gap-x-4  font-extrabold">
                    <h2
                        style={{
                            background: 'linear-gradient(90deg,#4b00f9,purple)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        تنسي العروض!
                    </h2>
                    <span className="text-black">لا</span>
                </div>

                <p className="relative z-10 mt-7 md:w-1/2 px-5 text-center font-bold text-lg text-gray-600">
                    يوفر لكم اشتراككم في النشرة البريدية الحصول على آخر التحديثات في مجال التسويق
                    الرقمي والتعرف على جديدنا من الخدمات والعروض أولا بأول
                </p>

                <div className="mt-5 flex flex-wrap md:flex-nowrap gap-x-5 gap-y-5 px-5">
                    <input
                        placeholder="أدخل بريدك الالكتروني"
                        type="text"
                        className="bg-zinc-300 shadow-lg outline-none border border-transparent focus:border-theme placeholder:text-gray-500 px-5 w-full py-3 rounded-lg"
                    />
                    <button
                        style={{
                            background: 'linear-gradient(90deg , #6401f7, #dc00ed )'
                        }}
                        className="bg-red-500 text-white px-10 rounded-full md:text-xl md:w-1/3 py-3 md:py-0">اشتراك</button>
                </div>

                <img src={dcoin} className='absolute left-[40px] md:left-[200px] bottom-16 md:bottom-20' alt="" />
                <img src={ethereum} className='absolute right-0 z-0 md:right-[150px] bottom-36' alt="" />
                <img src={circle} className='absolute left-10 md:left-[150px] top-20' alt="" />
                <img src={x} className='absolute right-10 md:right-[100px] top-14' alt="" />






            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_350_2894)">
                        <path d="M1.62012 3.57822L14.4135 16.3715L27.2068 3.57822L40.0001 16.3715L52.7934 3.57822L65.5868 16.3715L78.3801 3.57822" stroke="url(#paint0_linear_350_2894)" strokeWidth="4.26444" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_350_2894" x1="1.62012" y1="9.97488" x2="78.3801" y2="9.97488" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3754FB" />
                            <stop offset="1" stopColor="#FC01FF" />
                        </linearGradient>
                        <clipPath id="clip0_350_2894">
                            <rect width="79.9583" height="19.19" fill="white" transform="translate(0.0205078 0.379883)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>




        </div >
    )
}

export default Offer