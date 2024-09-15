import { FiSend } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import styles from './navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from "react";


function Navbar() {

    const { navLink } = styles;

    const { scrollY } = useScroll();

    const bgColor = useTransform(scrollY, [0, 200], [0, 0.8])
    const textColor = useTransform(scrollY, [0, 200], ['#000','#fff' ]);
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
            className="px-36 sticky top-0 z-50 py-3 shadow-xl ">

            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className="font-bold text-2xl">
                        لوجو
                    </h2>
                </div>

                <div ref={navLinksRef} className="flex items-center gap-x-2">

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

                    <button className="bg-theme font-bold hover:bg-themeHovered text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-x-3 border border-transparent hover:border-gray-700 transition-all">
                        تواصل معنا
                        <FiSend />
                    </button>

                </div>
            </div>




        </motion.nav>
    )
}

export default Navbar