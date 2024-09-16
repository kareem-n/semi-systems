import { FiSend } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import styles from './navbar.module.css';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { menu } from "framer-motion/client";


function Navbar() {

    const { navLink } = styles;

    const { scrollY } = useScroll();

    const [menuOpen, setMenuOpen] = useState(false);

    const bgColor = useTransform(scrollY, [0, 200], [0, 0.8])
    const textColor = useTransform(scrollY, [0, 200], ['#000', '#fff']);
    const bgColorReturn = useTransform(bgColor, (alpha) => `rgba(0,0,0,${alpha})`);


    const navLinksRef = useRef();

    const { hash } = useLocation();

    const links = [
        { path: '/', text: 'الصفحه الرئيسية' },
        { path: '#about', text: 'من نحن' },
        { path: '#services', text: 'الخدمات' },
        { path: '#portfolio', text: 'أعمالنا' },
        { path: '#blog', text: 'المدونة' },
        { path: '#faq', text: 'الاسئلة الشائعة' },
    ]



    const handleActiveLink = () => {

        const children = Array.from(navLinksRef.current.children)

        children.map((link) => {

            link.children[0].classList.remove("bg-theme", "text-white")
            if (hash !== '') {
                if (link.children[0].href.includes(hash)) {
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




    }, [navLinksRef, hash])


    return (
        <motion.nav
            style={{
                color: textColor,
                backgroundColor: bgColorReturn
            }}
            className="px-5 lg:px-36 sticky w-full top-0 z-50 py-3 shadow-xl ">

            <div className="flex items-center justify-between relative z-50">
                <div className="flex lg:hidden items-center gap-x-4">
                    <div
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-full">

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
                    <h2 className="font-bold text-2xl">
                        لوجو
                    </h2>
                </div>

                <div ref={navLinksRef} className="lg:flex hidden items-center gap-x-2">

                    {
                        links.map((link, index) =>
                            <motion.div

                                initial='hidden'
                                whileHover={'visible'}

                                key={index}
                                className={navLink}
                            >
                                <NavLink
                                    className={'flex py-2 px-4'}
                                    to={link.path}
                                    onClick={() => {
                                        // e.preventDefault();
                                        if (link.path === '/') {
                                            window.scrollTo({ top: 0 })
                                            return
                                        }

                                        const section = document.querySelector(link.path);



                                        window.scrollTo({ top: section.offsetTop - 80 })
                                    }}
                                >
                                    {link.text}
                                    <motion.div
                                        variants={{
                                            hidden: { scale: 0, x: 50, y: 50 },
                                            visible: { scale: 1, x: 0, y: 0 },
                                        }}


                                        className="absolute bg-theme inset-0 -z-10">

                                    </motion.div>
                                </NavLink>

                            </motion.div>

                        )
                    }



                </div>




                <div className="">

                    <button

                        className="bg-theme font-bold hover:bg-themeHovered text-white px-4 py-2 text-sm md:text-md lg:text-lg rounded-lg shadow-lg flex items-center gap-x-3 border border-transparent hover:border-gray-700 transition-all"
                    >
                        تواصل معنا
                        <FiSend />
                    </button>

                </div>
            </div>
            <AnimatePresence>
                {
                    menuOpen &&
                    <div className="fixed inset-0">

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

                            className="mt-24 flex flex-col gap-4 items-center ">
                            {
                                links.map((link, index) => <NavLink
                                    onClick={() => {
                                        setMenuOpen(false)

                                    }}
                                    className={'text-xl'} to={link.path} key={index}>
                                    {
                                        link.text
                                    }
                                </NavLink>)
                            }


                        </motion.div>
                    </div>
                }
            </AnimatePresence>






        </motion.nav>
    )
}

export default Navbar