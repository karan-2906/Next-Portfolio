import Image from "next/image"
import { motion } from "framer-motion"

const Loader = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className='flex flex-col justify-center bg-bodyColor items-center w-full h-screen'>
            <motion.div
                className='flex'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {['k', 'a', 'r', 'a', 'n'].map((letter, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Image width="30" height="30" src={`/logo/${letter}.png`} alt={letter} />
                    </motion.div>
                ))}
            </motion.div>
            <motion.div
                className='flex'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {['g', 'ga', 'gn', 'd', 'h', 'i'].map((letter, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Image width="25" height="25" src={`/logo/${letter}.png`} alt={letter} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Loader
