import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {BiSolidSun} from "react-icons/bi";
import {BiSolidMoon} from "react-icons/bi";

const Nav = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const [click, setClick] = useState(false);

    // document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents). 
    const element = document.documentElement;
    console.log(element);


    useEffect(()=>{
        if(theme === "dark"){
         element.classList.add("dark");
        //  <html lang="en" class="dark"></html> in index.html
         localStorage.setItem("theme", "dark");
        }
        else{
         element.classList.remove("dark");
        //  <html lang="en"></html> in index.html
         localStorage.removeItem("theme");
        }
      },[theme,element]);

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
           <div className="h-10vh flex justify-between z-50 text-white lg:py-5 pl-10 pr-20 py-4 bg-slate-900">
                <div className="flex items-center">
                    <div className="flex items-center pr-6">
                        <span className="text-2xl font-bold">Logo</span>
                    </div>
                    {/* Light and dark mode switcher  */}
                    <div>
                    {
                        theme === "dark" ? (<BiSolidSun className="text-2xl cursor-pointer" onClick={()=> setTheme("light")} />)
                        :
                        (<BiSolidMoon className="text-2xl cursor-pointer" onClick={()=> setTheme("dark")} />)
                    }
                    </div>
                </div>
                <div className="flex items-center">
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
           </div>
       </nav>
    );
};

export default Nav;