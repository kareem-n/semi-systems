
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
function Reveal({ children }) {


    const ElementRef = useRef(null);


    const animate = useAnimation();
    const inView = useInView(ElementRef, { once: true, margin:'-100px' });


    useEffect(() => {

        console.log(inView);
        if (inView) {
            animate.start({
                opacity: 1,
                x: 0
            })
        }


    }, [inView])



    return (
        <div ref={ElementRef}>

            <motion.div

                initial={{
                    opacity: 0,
                    x: 100
                }}

                animate={animate}


                className="">
                {
                    children
                }
            </motion.div>


        </div>
    )
}

export default Reveal