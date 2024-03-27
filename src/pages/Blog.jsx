import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import img1 from '../../public/post-3.jpg'
import img2 from '../../public/post-4.jpg'
import img3 from '../../public/post-6.jpg'
import img4 from '../../public/post-5.jpg'
import img5 from '../../public/post-2.jpg'
import img6 from '../../public/post-1.jpg'



const Blog = () => {
    return (
        <div className="bg-black h-full py-10">
             <Link to='/'><RxCross1 className="text-white text-4xl fixed top-2 right-2" /></Link>
             <div className="container mx-auto">
                <p className="text-white text-center ">Check out my latest blog posts</p>
                <h2 className="text-5xl font-bold text-white text-center relative after:content-['']
                 after:w-[100px] after:h-[6px] after:rounded-xl after:bg-[#087f5b] after:top-16
                  after:left-[50%] after:translate-x-[-50%] after:absolute  ">My Blog</h2>

                  <div className=" md:flex justify-between flex-wrap items-center mt-20">
                    <div className=" w-[80%] mx-auto md:w-[31%] mb-8">
                        <img  src={img1} alt="image" />
                        <h2 className="text-white text-3xl font-bold">How i become a web Designer</h2>
                        <p className="text-white text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla!</p>
                    </div>
                    <div className=" w-[80%] mx-auto md:w-[31%] mb-8">
                        <img  src={img2} alt="image" />
                        <h2 className="text-white text-3xl font-bold">How to Work From Office and IT</h2>
                        <p className="text-white text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla!</p>
                    </div>
                    <div className=" w-[80%] mx-auto md:w-[31%] mb-8">
                        <img  src={img3} alt="image" />
                        <h2 className="text-white text-3xl font-bold">How to Work From Office</h2>
                        <p className="text-white text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla!</p>
                    </div>
                    <div className=" w-[80%] mx-auto md:w-[31%] mb-8">
                        <img  src={img4} alt="image" />
                        <h2 className="text-white text-3xl font-bold">When I Went to Office</h2>
                        <p className="text-white text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla!</p>
                    </div>
                    <div className=" w-[80%] mx-auto md:w-[31%] mb-8">
                        <img  src={img5} alt="image" />
                        <h2 className="text-white text-3xl font-bold">When I Went to Office</h2>
                        <p className="text-white text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla!</p>
                    </div>
                    <div className=" w-[80%] mx-auto md:w-[31%] mb-8">
                        <img  src={img6} alt="image" />
                        <h2 className="text-white text-3xl font-bold">When My colleague is PhotoGrapher</h2>
                        <p className="text-white text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla!</p>
                    </div>

                  </div>



             </div>
           
        </div>
    );
};

export default Blog;