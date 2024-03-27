import { RxCross1 } from "react-icons/rx";
import { Link, NavLink, Outlet } from "react-router-dom";

const Portfollio = () => {
    const Items = [
        { name: 'All', link: '/portfolio/' },
        { name: 'Brand', link: '/portfolio/brand' },
        { name: 'Design', link: '/portfolio/design' },
        { name: 'Photo', link: '/portfolio/photo' },
       
      ];

    return (
        <div className="bg-black py-10">
              <Link to='/'><RxCross1 className="text-white text-4xl fixed top-2 right-2" /></Link>

              <div className="container mx-auto">
              <p className="text-white text-center ">Showcasing some of my best work</p>
                <h2 className="text-5xl font-bold text-white text-center relative after:content-['']
                 after:w-[100px] after:h-[6px] after:rounded-xl after:bg-[#087f5b] after:top-16
                  after:left-[50%] after:translate-x-[-50%] after:absolute  ">Portfolio</h2>
                  <div className="pt-16 flex justify-between items-center w-[60%]  md:w-[30%] lg:w-[20%] mx-auto">
                    {
                        Items.map((item,i)=>{
                            return(
                               <li className="list-none" key={i}><NavLink  className={({isActive}) => isActive ? "text-[#087f5b] text-xl" : "text-white text-xl hover:text-yellow-500"} to={item.link}>{item.name}</NavLink></li> 
                            )  
                        })
                            
                
                    }

                  </div>

                  <div className="mt-10">

                    <Outlet></Outlet>

                  </div>

              </div>

            
        </div>
    );
};

export default Portfollio;

