import { FiSend } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from './navbar.module.css';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import logo from '../../assets/logo.png';
import { FaAngleDoubleLeft, FaAngleDown } from "react-icons/fa";


function Navbar() {

    const { navLink } = styles;

    const { scrollY } = useScroll();

    const [menuOpen, setMenuOpen] = useState(false);

    const bgColor = useTransform(scrollY, [0, 200], [0, 0.8])
    const textColor = useTransform(scrollY, [0, 200], ['#000', '#fff']);
    const bgColorReturn = useTransform(bgColor, (alpha) => `rgba(0,0,0,${alpha})`);


    const navLinksRef = useRef();

    const { pathname } = useLocation();

    const links = [
        { path: '/', text: 'الصفحه الرئيسية' },
        {
            path: '/services', text: 'الخدمات', children: [
                {
                    text: 'خدمات التسويق الإلكترونية', children: [
                        { path: '/social', text: 'ادارة حسابات السوشيال ميديا' },
                        { path: '/marketing', text: 'إدارة الحملات التسويقية' },
                        { path: '/social', text: 'كتابة المحتوي' },
                        { path: '/seo', text: 'تحسين محركات البحث' },
                    ]
                },
                {
                    text: 'خدمات البرمجة و التصميم', children: [
                        { path: '/web', text: 'تصميم مواقع الكترونية' },
                        { path: '/mobile', text: 'تصميم تطبيقات الجوال' },
                        { path: '/busniness', text: 'تصميم الهوية التجارية' },
                        { path: '/social', text: 'كتابة المحتوي' },
                        { path: '/seo', text: 'تحسين محركات البحث' },
                    ]
                },
            ]
        },
        { path: '/about', text: 'من نحن' },
        { path: '/portfolio', text: 'أعمالنا' },
        { path: '/blog', text: 'المدونة' },
        { path: '/faq', text: 'الاسئلة الشائعة' },

    ]



    const handleActiveLink = () => {

        const children = Array.from(navLinksRef.current.children)

        children.map((link) => {

            link.children[0].classList.remove("bg-theme", "text-white")

            if (pathname !== '/') {

                if (link.children[0].href.includes(pathname)) {
                    link.children[0].classList.add("bg-theme", "text-white")
                }

            } else {
                children[0].children[0].classList.add("bg-theme", "text-white")

            }


        })

    }

    useEffect(() => {

        if (navLinksRef) {
            handleActiveLink();
        }

    }, [navLinksRef, pathname])


    return (
        <motion.nav
            style={{
                color: textColor,
                backgroundColor: bgColorReturn
            }}
            className="px-5 lg:px-36 border-none outline-none sticky w-full top-0 left-0 right-0 z-50 py-3 shadow-xl">

            <div className="flex items-center justify-between relative z-50">
                <div className="flex items-center gap-x-4">
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-full lg:hidden">

                        {
                            menuOpen ? (
                                <AnimatePresence>
                                    <motion.div
                                        initial={{
                                            scale: 0
                                        }}
                                        animate={{
                                            scale: 1
                                        }}
                                        exit={{
                                            scale: 0
                                        }}
                                        transition={{
                                            duration: .2
                                        }}
                                    >
                                        <IoClose size={25} />
                                    </motion.div>
                                </AnimatePresence>

                            ) : (

                                <motion.div
                                    initial={{
                                        scale: 0
                                    }}
                                    animate={{
                                        scale: 1
                                    }}
                                    exit={{
                                        scale: 0
                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                >
                                    <RiMenu2Fill size={22} />
                                </motion.div>)
                        }



                    </div>
                    <div className="">
                        <Link
                            onClick={() => [
                                window.scrollTo({
                                    top: 0
                                })
                            ]}
                            to={'/'}

                        >
                            <img src={logo} className="w-[55px]" alt="" />
                        </Link>
                    </div>
                </div>

                <div ref={navLinksRef} className="lg:flex hidden items-center gap-x-2">

                    {
                        links.map((link, index) => {
                            if (link.children) {
                                return <motion.div

                                    initial='hidden'
                                    whileHover={'visible'}

                                    key={index}
                                    className={navLink + ` `}

                                    onMouseEnter={(e) => {
                                        e.currentTarget.lastElementChild.classList.replace("hidden", "block")
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.lastElementChild.classList.replace("block", "hidden")
                                    }}

                                >
                                    <NavLink
                                        className={'flex  rounded-br-xl rounded-tl-xl relative'}
                                        to={link.path}
                                    >
                                        <div
                                            className="py-2 px-4 relative flex items-center gap-x-2"
                                        >
                                            {link.text}
                                            <FaAngleDown />
                                        </div>

                                        <motion.div
                                            variants={{
                                                hidden: { display: 'hidden', scale: 0, x: 50, y: 50 },
                                                visible: { display: 'block', scale: 1, x: 0, y: 0 },
                                            }}


                                            className="absolute bg-theme rounded-lg inset-0 -z-10">

                                        </motion.div>
                                    </NavLink>

                                    {
                                        link.children && <div className="hidden text-white absolute right-0 top-full pt-3">

                                            <div className="flex flex-col shadow-xl rounded-lg ">
                                                {
                                                    link.children.map((item, index) => <div
                                                        key={index}
                                                        // to={item.path}
                                                        className="bg-theme hover:bg-themeHovered text-nowrap cursor-auto select-none w-full border-b border-b-gray-800 relative"

                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.lastElementChild.classList.replace("hidden", "flex")
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.lastElementChild.classList.replace("flex", "hidden")
                                                        }}
                                                    >
                                                        <div
                                                            className="flex px-8  items-center py-2 gap-x-4">
                                                            {item.text}
                                                            <FaAngleDoubleLeft />
                                                        </div>




                                                        <div className="hidden bg-theme absolute right-full top-0  flex-col">
                                                            {
                                                                item.children?.map((fLink, index) => <Link
                                                                    key={index}
                                                                    to={fLink.path}
                                                                    className="px-8 py-2 inline-block hover:bg-themeHovered"
                                                                >
                                                                    {fLink.text}
                                                                </Link>)
                                                            }
                                                        </div>
                                                    </div>


                                                    )
                                                }


                                            </div>

                                        </div>
                                    }



                                </motion.div>
                            } else {
                                return <motion.div

                                    initial='hidden'
                                    whileHover={'visible'}

                                    key={index}
                                    className={navLink + ` `}
                                >
                                    <NavLink
                                        className={'flex  rounded-br-xl rounded-tl-xl relative'}
                                        to={link.path}
                                    >
                                        <div
                                            className="py-2 px-4 relative"
                                        >
                                            {link.text}
                                        </div>






                                        <motion.div
                                            variants={{
                                                hidden: { display: 'hidden', scale: 0, x: 50, y: 50 },
                                                visible: { display: 'block', scale: 1, x: 0, y: 0 },
                                            }}


                                            className="absolute bg-theme rounded-lg inset-0 -z-10">

                                        </motion.div>
                                    </NavLink>



                                </motion.div>
                            }
                        }


                        )
                    }



                </div>




                <div className="">
                    <Link to="/contact">
                        <button
                            className="bg-theme font-bold hover:bg-themeHovered text-white px-4 py-2 text-sm md:text-md lg:text-lg rounded-lg shadow-lg flex items-center gap-x-3 border border-transparent hover:border-gray-700 transition-all"
                        >
                            تواصل معنا
                            <FiSend />
                        </button>
                    </Link>



                </div>
            </div>
            <AnimatePresence>
                {
                    menuOpen &&
                    <div className="fixed z-40 inset-0">

                        <motion.div
                            initial={{
                                y: -100,
                                x: 100,
                                scale: 0
                            }}
                            animate={{
                                y: 0,
                                x: 0,
                                scale: 1
                            }}
                            exit={{
                                y: -100,
                                x: 100,
                                scale: 0
                            }}

                            className="mt-[60px] pt-5 flex flex-col items-center bg-white h-full text-black">


                            <div className="grid grid-cols-1 text-center w-full">
                                {
                                    links.map((link, index) => {

                                        if (link.children) {
                                            return <div

                                                key={index} className="text-xl font-bold relative ">

                                                <span
                                                    onClick={(e) => {

                                                        if (e.currentTarget.nextElementSibling.classList.contains("max-h-0")) {
                                                            e.currentTarget.nextElementSibling.classList.replace("max-h-0", "max-h-[200px]")
                                                        } else {
                                                            e.currentTarget.nextElementSibling.classList.replace("max-h-[200px]", "max-h-0")
                                                        }



                                                    }}
                                                    className="inline-flex justify-center items-center gap-x-2 py-3 w-full ">
                                                    {
                                                        link.text
                                                    }
                                                    <FaAngleDown />
                                                </span>

                                                <div className="transition-all bg-gray-200 max-h-0 overflow-hidden text-md font-normal flex flex-col ">

                                                    {
                                                        link.children.map((link, index) => <Link
                                                            key={index}
                                                            to={link.path}
                                                            className="py-2 "
                                                        >
                                                            {link.text}
                                                        </Link>)
                                                    }

                                                </div>

                                            </div>
                                        } else {
                                            return <Link
                                                onClick={() => {
                                                    setMenuOpen(false);


                                                }}
                                                to={link.path}
                                                key={index}
                                                className="py-3 font-bold text-xl">
                                                {link.text}
                                            </Link>
                                        }


                                    })


                                }
                            </div>













                        </motion.div>
                    </div>
                }
            </AnimatePresence>






        </motion.nav>
    )
}

export default Navbar