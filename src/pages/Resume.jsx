import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";


const Resume = () => {

    return (
        <div className="bg-black relative py-10">
             <Link to='/'><RxCross1 className="text-white text-4xl fixed top-2 right-2" /></Link>

             <div className="container mx-auto ">
                <p className="text-white text-center ">Check out my Resume</p>
                <h2 className="text-5xl font-bold text-white text-center relative after:content-['']
                 after:w-[100px] after:h-[6px] after:rounded-xl after:bg-[#087f5b] after:top-16
                  after:left-[50%] after:translate-x-[-50%] after:absolute  ">Resume</h2>

                  <div className=" w-full md:flex flex-wrap justify-between items-center pt-20 ">
                        <div className="w-full lg:w-[46%]">
                            <h2 className="text-white text-3xl font-semibold text-left pb-4 ">Education</h2>
                            <div className=" bg-[#212529] p-8">
                                <h2 className="text-white text-2xl ">Computer Science Enginner</h2>
                                <p className="text-white text-xl pb-3">Presidency University - 2017-2020</p>
                                <p className="text-white pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero commodi nulla provident repellendus, delectus debitis?</p>
                                <hr />
                                <h2 className="text-white text-2xl pt-10">Bachelor Degree</h2>
                                <p className="text-white text-xl pb-3">Presidency University - 2017-2020</p>
                                <p className="text-white pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero commodi nulla provident repellendus, delectus debitis?</p>
                                <hr />
                                <h2 className="text-white text-2xl pt-10">Master Degree</h2>
                                <p className="text-white text-xl pb-3"> ADmission On Processing</p>
                                <p className="text-white pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero commodi nulla provident repellendus, delectus debitis?</p>


                            </div>
                        </div>
                            <div className="w-full lg:w-[46%] pt-10 md:pt-0">
                                <h2 className="text-white text-3xl font-semibold text-left pb-4">Experience</h2>
                                <div className=" bg-[#212529] p-8">
                                    <h2 className="text-white text-2xl ">Front end developer with react</h2>
                                    <p className="text-white text-xl pb-3">Creative it institute - 2023-2024</p>
                                    <p className="text-white pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero commodi nulla provident repellendus, delectus debitis?</p>
                                    <hr />

                                    <h2 className="text-white text-2xl pt-10 ">Express.js</h2>
                                    <p className="text-white text-xl pb-3">Creative it institute - 2024</p>
                                    <p className="text-white pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero commodi nulla provident repellendus, delectus debitis?</p>
                                    <hr />
                                    <h2 className="text-white text-2xl pt-10 ">MongoDB</h2>
                                    <p className="text-white text-xl pb-3">Creative it institute - 2024</p>
                                    <p className="text-white pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero commodi nulla provident repellendus, delectus debitis?</p>


                                </div>
                            </div>
                    
                    </div>


                  <div className="my-14">
                        <p className="text-white text-center ">My level of knowledge in some tools</p>
                        <h2 className="text-5xl font-bold text-white text-center relative after:content-['']
                        after:w-[100px] after:h-[6px] after:rounded-xl after:bg-[#087f5b] after:top-16
                        after:left-[50%] after:translate-x-[-50%] after:absolute  ">My Skills</h2>

                        <div className="pt-20 md:flex flex-wrap justify-between items-center ">
                            <div className=" w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">HTML/CSS</h2>
                                    <h2 className="text-white text-xl">95%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[95%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                            <div className="w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">Web Design</h2>
                                    <h2 className="text-white text-xl">90%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[90%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                            <div className="w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">JavaScript</h2>
                                    <h2 className="text-white text-xl">85%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[85%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                            <div className="w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">React.js</h2>
                                    <h2 className="text-white text-xl">90%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[90%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                            <div className="w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">Express.js</h2>
                                    <h2 className="text-white text-xl">70%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[70%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                            <div className="w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">MongoDB</h2>
                                    <h2 className="text-white text-xl">60%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[60%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                            <div className="w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">Responsive</h2>
                                    <h2 className="text-white text-xl">95%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[95%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                            <div className="w-[80%] md:w-[48%] mb-10">
                                <div className="flex w-full justify-between pb-2">
                                    <h2 className="text-white text-xl">API Expert</h2>
                                    <h2 className="text-white text-xl">90%</h2>
                                </div>
                                <div className="w-full h-[8px] bg-white rounded-lg relative
                                 after:content-[' '] after:absolute after:w-[90%] after:h-[8px]
                                  after:top-0   after:left-0 after:bg-[#087f5b] after:rounded-lg"></div>
                            </div>
                        </div>

                  </div>

             </div>
            
        </div>
    );
};

export default Resume;