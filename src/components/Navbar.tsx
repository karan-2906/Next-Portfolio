import Image from "next/image"
import Logos from "./Logos"

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarshadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
        <div className="max-w-container mx-auto h-full py-1 font-titlefont flex items-center justify-between">
            <div>
               <Logos />
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar