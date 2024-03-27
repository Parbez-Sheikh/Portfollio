import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";


const Home = () => {


    const[show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }

    const menuItems = [
    
        { name: 'About', link: '/about' },
        { name: 'Resume', link: '/resume' },
        { name: 'Portfolio', link: '/portfolio' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' }
      ];

    return (
    
        <div className=" bg-black h-full  ">
            <div className="container mx-auto">

                <div className=" flex justify-between py-3 ">
                        <div className=" w-[20%] flex items-center  ">
                            <GiSelfLove className="text-5xl text-lime-300 md:text-5xl" />
                            <Link to='/' className="hidden md:block text-lime-300 text-2xl"> <span className="text-red-600 text-5xl font-semibold">P</span></Link>
                        </div>

                        <div className="w-[60%] hidden md:flex justify-end items-center gap-4 group">
                            {
                                menuItems.map((item,i)=>{
                                    return(
                                        <li key={i} className="list-none">
                                            <NavLink className={( {isActive }) => isActive ? " text-amber-200 "  : "text-white text-xl hover:text-lime-300 hover:font-semibold hover:text-2xl " } to={item.link} >{item.name}</NavLink>
                                        </li>
                                    
                                    )
                                })
                            }
                        </div>

                        <div className="w-[5%] pr-5  md:hidden"> 
                        {
                            show?
                            <RxCross1 onClick={handleShow} className="text-lime-300 text-5xl" />
                            :
                            <FiMenu onClick={handleShow} className="text-lime-300 text-5xl" />

                        }
                        
                        </div> 

                </div>

                {/* *********** */}

                {

                    show?

                       <div className="w-[30%] px-5 md:hidden py-2  text-center bg-[#3b4252] group">
                            {
                                menuItems.map((item,i)=>{
                                    return(
                                        <li key={i} className="list-none">
                                            <NavLink className={( {isActive }) => isActive ? " text-amber-200  "  : "text-white text-xl hover:text-red-400 hover:font-semibold hover:text-2xl " } to={item.link} >{item.name}</NavLink>
                                        </li>
                                    
                                    )
                                })
                            }
                        </div> 

                   
                    :

                    <div className="w-[20%] hidden  text-center bg-[#3b4252] group">
                    {
                        menuItems.map((item,i)=>{
                            return(
                                <li key={i} className="list-none">
                                    <NavLink className={( {isActive }) => isActive ? " text-amber-200  "  : "text-white text-xl hover:text-red-400 hover:font-semibold hover:text-2xl " } to={item.link} >{item.name}</NavLink>
                                </li>
                            
                            )
                        })
                    }
                   </div> 

                    
                }

                 {/* *********** */}
                 <div className=" md:flex justify-between md:py-8">
                    <div className=" w-full md:w-[50%] lg:w-[65] md:pt-40 ">
                        <h2 className=" text-4xl md:text-4xl lg:text-6xl font-bold tracking-wide text-white  text-center">Parbez Sheikh</h2>
                        <marquee ><p className=" text-2xl tracking-wide lg:text-3xl py-2 font-bold text-white  text-center">Front end developer with react.js</p></marquee>
                        
                    </div>

                    <div className=" w-[80%] mx-auto md:w-[40%] lg:w-[35%] overflow-hidden h-[450px] md:h-[400px] lg:h-[500px]  rounded-full">
                    <div className="bg-[url('IMG_20240212_204539_HDR.jpg')] py-[300px] bg-center bg-no-repeat bg-cover "> </div>
                    </div>

                 </div>

               






                
            </div>
               
        </div>
    
    );
};

export default Home;

