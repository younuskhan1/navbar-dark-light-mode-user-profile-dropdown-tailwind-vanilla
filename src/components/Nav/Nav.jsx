import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
    const content = <>
     <div className={"md:hidden block absolute top-16 w-4/5 left-0 right-0 bg-slate-900 transition duration-500"}>
         <ul className="text-center text-[18px] p-20">
            <Link spy={true} smooth={true} to="Home">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded transition duration-300">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded transition duration-300">About</li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded transition duration-300">Services</li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded transition duration-300">Projects</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded transition duration-300">Contact</li>
            </Link>
         </ul>
     </div>
    </>

    return (
       <nav>
           <div className="h-10vh flex justify-between z-50 text-white lg:py-5 pl-10 pr-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-2xl font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-10 mr-16 text-[15px]">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Services">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block md:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes size={22}></FaTimes>: <GiHamburgerMenu size={22}></GiHamburgerMenu>}
                </button>
                <DropdownMenu></DropdownMenu>
           </div>
       </nav>
    );
};

export default Nav;