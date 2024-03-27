import img1 from '../../public/item-1.jpg'

import img3 from '../../public/item-3.jpg'

import img5 from '../../public/item-5.jpg'


const Design = () => {
    return (
        <div className="flex justify-between flex-wrap items-center">
            <div className='w-[31%] mb-8'>
                <img src={img1} alt="" />
            </div>
          
            <div className='w-[31%] mb-8'>
                <img src={img3} alt="" />
            </div>
           
            <div className='w-[31%] mb-8'>
                <img src={img5} alt="" />
            </div>
           
            
        </div>
    );
};

export default Design;