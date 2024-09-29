import { motion } from "framer-motion"
import { TiArrowBack, TiArrowForward } from "react-icons/ti"

const Mayvent = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full "
        >
            <h3 className="flex gap-1 font-medium text-xl font-titlefont">
                Full stack Developer <a href="https://www.mayvent.com/" target="_blank" className="text-textGreen tracking-wide">@Mayvent</a>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">July 2024 - Present</p>
            <ul>
                <li><span><TiArrowForward/></span></li>
            </ul>

        </motion.div>
    )
}

export default Mayvent