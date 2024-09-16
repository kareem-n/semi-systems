import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { MdAlternateEmail, MdOutlinePhoneAndroid } from "react-icons/md"
import { NavLink } from "react-router-dom"

function Footer() {


    const services = [
        'تصميم المواقع',
        'تطبيقات الجوال',
        'إدارة الحملات التسويقية',
        'إدارة حسابات التواصل الاجتماعي',
        'تصميم الهوية التجارية',
        'تحسين محركات البحث'
    ]

    const importantLinks = [
        'من نحن',
        'اتصل بنا',
        'سياسة الخصوصية',
        'اتفاقية الاستخدام',
        'منطقة العملاء'
    ]

    return (
        <div
            className="bg-white p-10 md:p-20 border-t-2 border-theme/20"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10">
                <div className="">
                    <h2 className="text-4xl text-theme">
                        Logo
                    </h2>
                    <p className="mt-4 text-gray-500 md:pl-20">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن
                        المحتوى المقروء لصفحة ما سيلهي القارئ
                        عن التركيز على الشكل الخارجي.
                    </p>
                </div>

                <div className="">
                    <h3 className="text-2xl font-bold">
                        خدماتنا
                    </h3>

                    <div className="flex flex-col items-start gap-y-3 mt-5 text-md">
                        {
                            services.map((link, index) => <NavLink key={index} className={'flex hover:text-themeHovered items-center gap-x-2'}>
                                <FaExternalLinkAlt size={12} className="text-gray-500" />
                                {link}
                            </NavLink>)
                        }
                    </div>
                </div>

                <div className="">
                    <h3 className="text-2xl font-bold">
                        روابط تهمك
                    </h3>

                    <div className="flex flex-col items-start gap-y-3 mt-5 text-md">
                        {
                            importantLinks.map((link, index) => <NavLink key={index} className={'flex  hover:text-themeHovered items-center gap-x-2'}>
                                <FaExternalLinkAlt size={12} className="text-gray-500" />
                                {link}
                            </NavLink>)
                        }
                    </div>
                </div>


                <div className="">
                    <h3 className="text-2xl font-bold">
                        كن على تواصل
                    </h3>

                    <div className="flex flex-col gap-y-3 mt-5 text-lg font-bold">
                        <div className="flex items-center gap-x-2">
                            <MdOutlinePhoneAndroid size={21} className="text-theme" />

                            01225610933
                        </div>
                        <div className="flex items-center gap-x-2">
                            <FaWhatsapp size={21} className="text-theme" />
                            01225610933
                        </div>
                        <div className="flex items-center gap-x-2">
                            <MdAlternateEmail size={21} className="text-theme" />

                            any@mail.com
                        </div>
                        <div className="flex items-center gap-x-2">
                            <IoLocationOutline size={21} className="text-theme" />
                            any
                        </div>
                    </div>
                    <div className="flex mt-4 gap-x-5">
                        <div className="bg-theme md:p-3 p-2 cursor-pointer rounded-full text-white hover:bg-themeHovered">
                            <FaFacebook  />
                        </div>
                        <div className="bg-theme md:p-3 p-2 cursor-pointer rounded-full text-white hover:bg-themeHovered">
                            <FaTwitter />
                        </div>
                        <div className="bg-theme md:p-3 p-2 cursor-pointer rounded-full text-white hover:bg-themeHovered">
                            <FaLinkedin />
                        </div>
                        <div className="bg-theme md:p-3 p-2 cursor-pointer rounded-full text-white hover:bg-themeHovered">
                            <FaInstagram />
                        </div>
                    </div>



                </div>

            </div>


        </div >
    )
}

export default Footer