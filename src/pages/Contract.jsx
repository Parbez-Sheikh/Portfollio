import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";


const Contract = () => {
    return (
        <div className="bg-black py-14 h-full">
             <Link to='/'><RxCross1 className="text-white text-4xl fixed top-2 right-2" /></Link>

             <div className="container mx-auto">
                <p className="text-white text-center ">Feel free to contact me anytimes</p>
                <h2 className="text-5xl font-bold text-white text-center relative after:content-['']
                 after:w-[100px] after:h-[6px] after:rounded-xl after:bg-[#087f5b] after:top-16
                  after:left-[50%] after:translate-x-[-50%] after:absolute  ">Get in Touch</h2>

                  <div className=" md:flex mt-20 gap-8">
                        <div className=" w-[80%]  md:w-[50%]  p-5">
                            <h2 className="text-white text-3xl font-bold mb-5">Message Me</h2>
                            <div className="flex justify-between mb-8 w-full">
                                <input className="w-[46%] bg-[#212529] text-white px-8 py-2 outline-none" placeholder="Name" type="text" />
                                <input className="w-[46%] bg-[#212529] text-white px-8 py-2 outline-none" placeholder="Email" type="text" />
                            </div>
                            <input className="w-full bg-[#212529] mb-8 text-white px-8 py-2 outline-none" placeholder="Subject" type="text" />
                            <input className="w-full bg-[#212529] mb-8 text-white p-8  outline-none" placeholder="Message" type="text" />
                            <button className="text-white px-8 py-3 bg-[#087f5b] font-bold hover:text-yellow-600 rounded-3xl ">Send Messege</button>
                        </div>
                        <div className=" w-[80%]  md:w-[40%]  p-5">
                            <h2 className="text-white text-3xl font-bold mb-5 ">Contact Info</h2>
                            <p className="text-slate-600 text-lg mb-8">Always available for freelance work if the right project comes along, Feel free to contact me! </p>
                            <div className="flex gap-8 mb-4" >
                            <MdOutlineDriveFileRenameOutline className="text-[#087f5b] w-[15%] text-4xl" />
                            <h2 className="text-white w-[70%] text-xl">Name: <span className="text-slate-600">Parbez Sheikh</span> </h2>
                            </div>
                            <div className="flex gap-8 mb-4" >
                            <FaLocationDot className="text-[#087f5b] w-[15%] text-4xl" />
                            <h2 className="text-white w-[70%] text-xl">Location: <span className="text-slate-600">Uttara,Dhaka,Bangladesh</span> </h2>
                            </div>
                            <div className="flex gap-8 mb-4" >
                            <IoCallOutline className="text-[#087f5b] w-[15%] text-4xl" />
                            <h2 className="text-white w-[70%] text-xl">Phone:<span className="text-slate-600"> +88-01704083214</span></h2>
                            </div>
                            <div className="flex gap-8 mb-4" >
                            <MdOutlineMail className="text-[#087f5b] w-[15%] text-4xl" />
                            <h2 className="text-white w-[70%] text-xl">Email:<span className="text-slate-600"> parbezmusarof2@gmail.com</span></h2>
                            </div>
                            
                        </div>
                  </div>

             </div>

           
        </div>
    );
};

export default Contract;