import { FaTelegramPlane } from "react-icons/fa"; 
import { FaTiktok } from "react-icons/fa"; 
import { BsYoutube } from "react-icons/bs"; 
import { BsTelephone } from "react-icons/bs"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { CiLocationOn } from "react-icons/ci"; 
import logo1 from '../assets/logo1.png';
function Footer(){
    return (
        <footer className="flex bg-black justify-between">
            <div>
                <div className="flex">
                <img src={logo1} width={70} height={50} alt="logo" className="mr-6" />
                <div className="">
                    <h1 className=" text-white font-bold  text-xl xl:text-3xl">
                        EAGLE<span className="text-yellow-400">GLOW</span>
                    </h1>
                    <p className="text-white font-serif text-sm">Shaolin Wushu Center</p>
                </div>
                </div>
               
                <p className="flex items-center text-white">
                    <CiLocationOn className="text-[#FFD900] mr-2" size={20} />
                    Gerji, Yerer Guilt
                </p>

                <p className="flex items-center text-white">
                    <AiOutlineMail className="text-[#FFD900] mr-2" size={18} />
                    abelmathiosgebru7@gmail.com
                </p>

                <p className="flex items-center text-white">
                    <BsTelephone className="text-[#FFD900] mr-2" size={16} />
                    +251-900-636-249
                </p>
            </div>

            <div className="grid">
                <h1 className="text-[#FFD900] text-3xl">Quick Link</h1>
                <a href="#" className="text-[#FFD900]">About us</a>
                <a href="#" className="text-[#FFD900]">Gallary</a>
                <a href="#" className="text-[#FFD900]">Classes</a>
                <a href="#" className="text-[#FFD900]">Schedule</a>
                <a href="#" className="text-[#FFD900]">Contact us</a>
            </div>

            <div>
                <h1 className="text-[#FFD900] text-3xl">Stay Connected</h1>
                <BsYoutube className="text-[#FFD900]" />
                <FaTiktok className="text-[#FFD900]"/>
                <FaTelegramPlane className="text-[#FFD900]"/>
            </div>
        </footer>
    )
}
export default Footer;