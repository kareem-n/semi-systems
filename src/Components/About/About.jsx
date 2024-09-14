import man from '../../assets/Man.png'
import Darsh from '../../assets/Darsh.png'
import ActiveClients from '../../assets/ActiveClients.png'
import stars from '../../assets/Elements.png'


function About() {
    return (
        <div id='about' className='px-48 py-20 relative'>

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

            <div className="flex items-center gap-x-36">

                <div className="w-1/2 relative">
                    <img src={man} className='relative z-10' alt="" />

                    <img src={Darsh} className='absolute z-10 bottom-0 left-0 -translate-x-1/2' alt="" />
                    <img src={ActiveClients} className='absolute z-10 bottom-1/2 left-0 -translate-x-1/2' alt="" />
                    <img src={stars} className='absolute top-0 left-1/2 -translate-x-2/3 ' alt="" />
                </div>

                <div className="w-1/2">
                    <h2 className='text-3xl font-bold text-red-600'>
                        من نحن
                    </h2>
                    <h3 className='mt-5 text-5xl'>
                        نحن أكثر من مجرد <br />
                        وكالة رقمية في العالم
                    </h3>
                    <p className='mt-4 text-lg text-gray-600'>
                        نحن نسعى لتقديم حلول مبتكرة وشاملة للتحديات التي تواجه عملك
                        من خلال خبراتنا الواسعة ورؤيتنا الإبداعية في بناء وتطوير العلامات التجارية،
                        لنمنحك أفضل النتائج الممكنة ونحقق لك التفوق في عالم التسويق الرقمي.
                    </p>
                    <button className='bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-10 py-3 rounded-full mt-5'>
                        تواصل معنا
                    </button>
                </div>

            </div>

        </div>
    )
}

export default About