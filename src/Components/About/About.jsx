import man from '../../assets/Man.png'
import Darsh from '../../assets/Darsh.png'
import ActiveClients from '../../assets/ActiveClients.png'
import stars from '../../assets/Elements.png'
import Reveal from '../Reveal/Reveal'


function About() {
    return (
        <div id='about' className='md:px-48 px-5 py-20 relative'>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_350_2913)">
                        <path d="M1.62012 3.19833L14.4135 15.9917L27.2068 3.19833L40.0001 15.9917L52.7934 3.19833L65.5868 15.9917L78.3801 3.19833" stroke="url(#paint0_linear_350_2913)" strokeWidth="4.26444" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_350_2913" x1="1.62012" y1="9.595" x2="78.3801" y2="9.595" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3754FB" />
                            <stop offset="1" stopColor="#FC01FF" />
                        </linearGradient>
                        <clipPath id="clip0_350_2913">
                            <rect width="79.9583" height="19.19" fill="white" transform="translate(0.0209961)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>

            <div className="flex items-center flex-wrap md:flex-nowrap gap-x-36">

                <div className="md:w-1/2 w-full relative">

                <Reveal>
                        <div>
                            <img src={man} className='relative z-10 w-full' alt="" />
                            {/* <img src={Darsh} className='hidden md:block absolute z-10 bottom-0 left-0 -translate-x-1/2' alt="" /> */}
                            {/* <img src={ActiveClients} className='absolute z-10 bottom-1/2 md:left-full right-0 w-[150px] md:-translate-x-1/2' alt="" /> */}
                            {/* <img src={stars} className='absolute top-0 left-1/2 -translate-x-2/3 ' alt="" /> */}
                        </div>

                    </Reveal>
                </div>



                <div className="md:w-1/2 w-full ">
                    <Reveal>
                        <h2 className='text-3xl font-bold text-red-600'>
                            من نحن
                        </h2>
                    </Reveal>

                    <Reveal>
                        <h3 className='mt-5 text-5xl'>
                            نحن أكثر من مجرد <br />
                            وكالة رقمية في العالم
                        </h3>
                    </Reveal>

                    <Reveal>
                        <p className='mt-4 text-lg text-gray-600'>
                            نحن نسعى لتقديم حلول مبتكرة وشاملة للتحديات التي تواجه عملك
                            من خلال خبراتنا الواسعة ورؤيتنا الإبداعية في بناء وتطوير العلامات التجارية،
                            لنمنحك أفضل النتائج الممكنة ونحقق لك التفوق في عالم التسويق الرقمي.
                        </p>
                    </Reveal>

                    <Reveal>
                        <button className='bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-10 py-3 rounded-full mt-5'>
                            تواصل معنا
                        </button>
                    </Reveal>


                </div>

            </div>

        </div>
    )
}

export default About