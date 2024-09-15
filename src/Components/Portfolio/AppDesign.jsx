
import { motion } from 'framer-motion'



import item from '../../assets/Ourportfolio.png';
import Reveal from '../Reveal/Reveal';

function AppDesign() {


    const items = [
        item,
        item,
        item,
        item,
        item,
        item,
    ];


    return items.map((item, index) =>
        <motion.div
            initial={{
                scale: 0
            }}

            animate={{
                scale: 1
            }}

            transition={{
                duration: 0.2,
            }}

            exit={{
                scale: 0
            }}

            key={index} className="shadow-xl ">
            <Reveal>
                <img src={item} className='block w-full' alt="" />
            </Reveal>

        </motion.div>

    )


}

export default AppDesign