import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { MdAlternateEmail, MdOutlinePhoneAndroid } from "react-icons/md"
import { NavLink } from "react-router-dom"

function Footer() {


    const services = [
        { text: 'تصميم المواقع', path: '/web' },
        { text: 'تطبيقات الجوال', path: '/mobile' },
        { text: 'إدارة الحملات التسويقية', path: '/marketing' },
        { text: 'إدارة حسابات التواصل الاجتماعي', path: '/social' },
        { text: 'تصميم الهوية التجارية', path: '/brand' },
        { text: 'تحسين محركات البحث', path: '/seo' },
    ]

    const importantLinks = [
        { text: 'من نحن', path: '/about' },
        { text: 'اتصل بنا', path: '/#' },
        { text: 'سياسة الخصوصية', path: '/' },
        { text: 'اتفاقية الاستخدام', path: '/' },
        { text: 'منطقة العملاء', path: '/' }

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
                            services.map((link, index) => <NavLink
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0
                                    })
                                }}
                                to={link.path}
                                key={index}
                                className={'flex hover:text-themeHovered items-center gap-x-2'}>
                                <FaExternalLinkAlt size={12} className="text-gray-500" />
                                {link.text}
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
                            importantLinks.map((link, index) => <NavLink

                                to={link.path}
                                key={index}
                                className={'flex  hover:text-themeHovered items-center gap-x-2'}

                                onClick={() => {
                                    window.scrollTo({ top: 0 })
                                }}>
                                <FaExternalLinkAlt size={12} className="text-gray-500" />
                                {link.text}
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
                            <FaFacebook />
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