
import { motion } from 'framer-motion'



import item from '../../assets/Ourportfolio.png';

function Logo() {


    const items = [
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
                duration: 0.2 ,
            }}

            exit={{
                scale: 0
            }}

            key={index} className="shadow-xl ">
            <img src={item} alt="" />
            
        </motion.div>

    )


}

export default Logo