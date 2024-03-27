import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFigma } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiWebflow } from "react-icons/si";
import { MdOutlineWebStories } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";

const About = () => {
    return (
        <div className="bg-black relative">
            <Link to='/'><RxCross1 className="text-white text-4xl fixed top-2 right-2" /></Link>

            <div className="container mx-auto py-6">
                <p className="text-white text-center ">Get to know me</p>
                <h2 className="text-5xl font-bold text-white text-center relative after:content-[''] after:w-[100px] after:h-[6px] after:rounded-xl after:bg-[#087f5b] after:top-16 after:left-[50%] after:translate-x-[-50%] after:absolute  ">About Me</h2>

                <div className=" md:flex justify-between py-20 ">
                    <div className="w-[80%] md:w-[35%] mx-auto shadow-inner rounded-lg shadow-gray-300 ">
                        <img className="rounded-lg" src="/parbez.jpg" alt="" />
                    </div>
                    <div className=" w-[80%] md:w-[55%] ">
                        <h3 className="text-[#087f5b]  text-2xl tracking-wide font-semibold">Who am I ?</h3>
                        <h2 className="text-white  text-4xl font-semibold my-8 tracking-wide">Iam Parbez Sheikh,A frontend developer with react</h2>
                        <p className="text-[#434c5e]  text-xl mb-16">Im a professional Front-End Developer.I always like to work with various latest technologies and programming languages.My goal is to satisfy you with my work.</p>
                        <hr />
                         <div className=" md:flex my-16 text-lg ">
                            <div className="w-[80%] md:w-[42%]">
                                <h2 className="text-white text-xl">Name: <span className="text-[#434c5e]">Parbez Sheikh</span></h2>
                                <h2 className="text-white text-xl  md:mt-3">Age: <span className="text-[#434c5e]">27</span></h2>
                            </div>
                            <div className="w-80%] md:w-[45%]">
                            <h2 className="text-white text-xl ">Email: <span className="text-[#434c5e]">parbezmusarof2@gmail.com</span></h2>
                            <h2 className="text-white text-xl md:mt-3">From: <span className="text-[#434c5e]">Dhaka , Bangladesh</span></h2>
                            </div>
                        </div>

                        <div className=" lg:flex items-center">
                            <div className="w-[40%] md:w-[25%] mr-4 md:mr-0 ">
                                <button className="bg-[#087f5b] px-8 py-2 rounded-3xl text-white font-bold hover:text-red-600">CV Download</button>
                            </div>
                            <div className=" hidden lg:block md:w-[15%]">
                                <hr />
                            </div>
                            <div className=" w-[40%] ml-2 md:ml-3 flex gap-4 my-4 lg:my-0">
                            <AiOutlineFacebook className="bg-white text-xl cursor-pointer hover:bg-[#087f5b]" />
                            <FaInstagram className="bg-white text-xl cursor-pointer hover:bg-[#087f5b]" />
                            <FaGithub className="bg-white text-xl cursor-pointer hover:bg-[#087f5b]" />
                            <FaLinkedin className="bg-white text-xl cursor-pointer hover:bg-[#087f5b]" />
                            <MdEmail className="bg-white text-xl cursor-pointer hover:bg-[#087f5b]" />

                            </div>
                        </div>

                       

                    </div>
                </div>
                {/* ************** */}
                <div className=" md:my-6">
                    <p className="text-white text-center ">Services i offer to my clients</p>
                    <h2 className="text-5xl font-bold text-white text-center relative
                    after:content-[''] after:w-[100px] after:h-[6px] after:rounded-xl
                    after:bg-[#087f5b] after:top-16 after:left-[50%] after:translate-x-[-50%]
                    after:absolute ">My Services</h2>

                   <div className=" sm:flex justify-between flex-wrap items-center py-10 sm:py-10">
                        <div className=" sm:w-[45%] md:w-[30%] bg-[#212529] p-8 m-3 sm:my-10 lg:my-8 group">
                            <FaFigma className="text-[#087f5b] text-5xl group-hover:text-yellow-600"/>
                            <h2 className="text-white text-3xl py-3">Figma Design</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dicta</p>
                        </div>
                        <div className=" sm:w-[45%] md:w-[30%] bg-[#212529] p-8 m-3 sm:my-10  lg:my-8 group">
                            <GrGallery  className="text-[#087f5b] text-5xl group-hover:text-yellow-600"/>
                            <h2 className="text-white text-3xl py-3">PHD Design</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dicta</p>
                        </div>
                        <div className=" sm:w-[45%] md:w-[30%] bg-[#212529] p-8 m-3 sm:my-0  lg:my-8 group">
                            <MdOutlineSupportAgent  className="text-[#087f5b] text-5xl group-hover:text-yellow-600"/>
                            <h2 className="text-white text-3xl py-3">Customer Support</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dicta</p>
                        </div>
                        <div className=" sm:w-[45%] md:w-[30%] bg-[#212529] sm:my-0 p-8 m-3 group">
                            <SiWebflow  className="text-[#087f5b] text-5xl group-hover:text-yellow-600"/>
                            <h2 className="text-white text-3xl py-3">Web Development</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dicta</p>
                        </div>
                        <div className=" sm:w-[45%] md:w-[30%] bg-[#212529] sm:my-10 p-8 m-3 group">
                            <MdOutlineWebStories  className="text-[#087f5b] text-5xl group-hover:text-yellow-600"/>
                            <h2 className="text-white text-3xl py-3">Fully Responsive</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dicta</p>
                        </div>
                        <div className=" sm:w-[45%] md:w-[30%] bg-[#212529] sm:my-10 p-8 m-3 group">
                            <VscRemoteExplorer className="text-[#087f5b] text-5xl group-hover:text-yellow-600"/>
                            <h2 className="text-white text-3xl py-3">Remote job</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, dicta</p>
                        </div>
                    
                   </div>



                </div>
               
            </div>
          
            
        </div>
    );
};

export default About;