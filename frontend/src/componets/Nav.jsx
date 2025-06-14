import { GiHamburgerMenu } from "react-icons/gi"; 
import logo1 from '../assets/logo1.png';
import { useState } from "react";
import { Link } from "react-router-dom";


function Nav(){
    const routes = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/About" },
        { name: "Gallery", path: "/Gallery" },
        { name: "Classes", path: "/Classes" },
        { name: "Schedules", path: "/Schedules" },
        { name: "Contact us", path: "/Contact" }
    ];

    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    
        function handleMobileMenu() {
            setIsMobileMenuShown(!isMobileMenuShown);
        }
    return (
        <nav className="flex bg-black flex-wrap items-center justify-between px-4">
            <Link to="/">
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
                
                    
                </div>  
                
                
            </Link>

            <button
                onClick={handleMobileMenu}
                className="md:hidden hover:bg-white-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-200"
                >
                <GiHamburgerMenu size={30} className="text-white"/>
            </button>

            <div className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto md:block py-4`}>
                <ul className="flex flex-col lg:flex-row text-lg rounded-lg p-3 lg:bg-transparent lg:border-none lg:space-x-3">
                    {routes.map(({ name, path }) => (
                        <li className="py-2" key={name}>
                            <Link
                                to={path}
                                className="block text-white w-full rounded-lg p-3 hover:text-[#FFD900]"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
           <button className="bg-[#FFD900] text-black font-bold py-2 px-6 rounded-full shadow-[0_0_5px_#FFC107,0_0_10px_#FFCA28,0_0_15px_#FFD54F] hover:shadow-[0_0_15px_#FFC107,0_0_25px_#FFCA28,0_0_35px_#FFD54F] transition-shadow duration-300 pr-6 hidden xl:block">
                Register Now    
            </button>
        </nav>
        
    )
}
export default Nav;