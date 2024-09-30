import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const Grow = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full "
        >
            <h3 className="flex gap-1 font-medium text-xl font-titlefont">
            Front-end Developer <a href="https://growweducators.vercel.app/" target="_blank" className="text-textGreen tracking-wide">@Grow Educators</a>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">August 2023 - October 2023</p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Developed and maintained the company website using React.js and Tailwind CSS
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Work with a variety of different packages, animation styles, languages, frameworks such as JavaScript and React
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1"><TiArrowForward /></span>
                    Communicate with multi-disciplinary teams of Designers and Team Lead on a daily basis
                </li>
            </ul>

        </motion.div>
    )
}

export default Grow