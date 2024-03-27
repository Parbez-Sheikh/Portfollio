import img1 from '../../public/item-1.jpg'
import img2 from '../../public/item-2.jpg'
import img3 from '../../public/item-3.jpg'
import img4 from '../../public/item-4.jpg'
import img5 from '../../public/item-5.jpg'
import img6 from '../../public/item-6.jpg'

const Brand = () => {
    return (
        <div className="flex justify-between flex-wrap items-center">
            <div className='w-[31%] mb-8'>
                <img src={img1} alt="" />
            </div>
            
            
            <div className='w-[31%] mb-8'>
                <img src={img4} alt="" />
            </div>
            
            <div className='w-[31%] mb-8'>
                <img src={img6} alt="" />
            </div>
            
        </div>
    );
};

export default Brand;